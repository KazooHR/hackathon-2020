import jwksClient from "jwks-rsa";
import nJwt from "njwt";

import config from "./config";

interface JwtClaims {
  sub: string;
  name: string;
  email: string;
  ver: number;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  jit: string;
  amr: string[];
  idp: string;
  nonce: string;
  preferred_username: string;
  auth_time: string;
  at_hash: string;
}

interface Jwt {
  claims: JwtClaims;
  header: {
    typ: string;
    alg: string;
    kid: string;
  };
}

function verifyAudience(expected: string | string[], aud: string) {
  if (!expected) {
    throw new Error("expected audience is required");
  }

  if (Array.isArray(expected) && !expected.includes(aud)) {
    throw new Error(
      `audience claim ${aud} does not match one of the expected audiences: ${expected.join(
        ", "
      )}`
    );
  }

  if (!Array.isArray(expected) && aud !== expected) {
    throw new Error(
      `audience claim ${aud} does not match expected audience: ${expected}`
    );
  }
}

function verifyIssuer(expected: string, issuer: string) {
  if (issuer !== expected) {
    throw new Error(
      `issuer ${issuer} does not match expected issuer: ${expected}`
    );
  }
}

export default class JwtVerifier {
  private readonly issuer: string = "https://kazoohr.okta.com";
  private readonly clientId: string = config.get("OKTA_CLIENT_ID");
  private readonly jwksClient: jwksClient.JwksClient;
  private readonly verifier: any;

  constructor() {
    this.jwksClient = jwksClient({
      jwksUri: this.issuer + "/oauth2/v1/keys",
      cache: true,
      cacheMaxAge: 60 * 60 * 1000,
      cacheMaxEntries: 3,
      jwksRequestsPerMinute: 10,
      rateLimit: true,
    });
    this.verifier = nJwt
      .createVerifier()
      .setSigningAlgorithm("RS256")
      .withKeyResolver((kid: any, cb: any) => {
        this.jwksClient.getSigningKey(kid, (err, key) => {
          try {
            const publicKey = key.getPublicKey();
            cb(err, publicKey);
          } catch (e) {
            cb(e, null);
          }
        });
      });
  }

  async verify(token: string): Promise<Jwt> {
    return new Promise((resolve, reject) => {
      this.verifier.verify(token, (err: any, jwt: any) => {
        if (err) {
          return reject(err);
        }

        jwt.claims = jwt.body;
        delete jwt.body;

        resolve(jwt);
      });
    });
  }

  async verifyAccessToken(accessTokenString: string) {
    const jwt = await this.verify(accessTokenString);
    verifyAudience(this.clientId, jwt.claims.aud);
    verifyIssuer(this.issuer, jwt.claims.iss);
    return jwt;
  }
}
