import "./types";
import http from "http";
import express from "express";
import { server } from "./graphql";
import { appLogger, appErrorLogger, logger } from "./utils/logger";
import routes from "./routes";
import {dirname} from "path";

const PORT = 8080;
const staticConfig = {
    // 21 days in milliseconds
    maxAge: 86400 * 21 * 1000,
    cacheControl: true,
    immutable: true
};
const app = express();

server.applyMiddleware({ app });

app.use(appErrorLogger());
// Serve Confetti stylesheet
const stylesPath = require.resolve("@kazoohr/confetti/build/styles.css");
const staticRoot = dirname(stylesPath);

const confettiVersion = "16.5.2";
app.use(
    `/static/${confettiVersion}/confetti`,
    express.static(staticRoot, staticConfig)
);
app.use(routes);

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  logger.info(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  logger.info(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
