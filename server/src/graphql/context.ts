import WebSocket from "ws";
import { Request, Response } from "express";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

import { logger } from "../utils/logger";
import JWTVerifier from "../utils/jwt";

interface CurrentUser {
  name: string;
  email: string;
  preferred_username: string;
  auth_time: string;
}

interface GraphqlContextParams {
  expressContext?: ExpressContext;
  webSocket?: WebSocket;
  authToken?: string;
}

const verifier = new JWTVerifier();

export class GraphqlContext {
  public readonly req: Request | undefined;
  public readonly res: Response | undefined;
  public readonly webSocket: WebSocket | undefined;

  private readonly _authToken: string | undefined;
  private _currentUser: CurrentUser | undefined;

  constructor(params: GraphqlContextParams) {
    const { req, res } = params.expressContext || {};
    this.req = req;
    this.res = res;
    this._currentUser = undefined;
    this._authToken = params.authToken;
    this.webSocket = params.webSocket;
  }

  private get rawToken() {
    return this.req?.header("Authorization") || this._authToken || undefined;
  }

  public get currentUser() {
    return this._currentUser;
  }
  async parseToken() {
    const rawToken = this.rawToken;

    if (rawToken) {
      try {
        const jwt = await verifier.verifyAccessToken(rawToken);

        const { email, name, preferred_username, auth_time } = jwt.claims;
        this._currentUser = {
          email,
          name,
          preferred_username,
          auth_time,
        };
      } catch (e) {
        logger.warn("Invalid auth token", {
          error: e,
        });
        this._currentUser = undefined;
      }
    }
  }
}
