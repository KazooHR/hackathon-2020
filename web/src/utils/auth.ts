import { AuthService } from "@okta/okta-react";
import config from "./config";

const redirectUri = config.IS_PROD
  ? `https://${window.location.host}/authorization-code/callback`
  : "http://localhost:3000/authorization-code/callback";

const auth = new AuthService({
  clientId: "0oa4wqluetAkekgqg357",
  issuer: "https://kazoohr.okta.com",
  redirectUri,
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

export default auth;
