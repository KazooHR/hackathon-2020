import { AuthService } from "@okta/okta-react";

const auth = new AuthService({
  clientId: "0oa4wqluetAkekgqg357",
  issuer: "https://kazoohr.okta.com",
  redirectUri: "http://localhost:3000/authorization-code/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

export default auth;
