import "./types";
import http from "http";
import express from "express";

import { server } from "./graphql";
import { appLogger, appErrorLogger, logger } from "./utils/logger";
import routes from "./routes";

const PORT = 8080;

const app = express();

server.applyMiddleware({ app });

app.use(appErrorLogger());

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
