import fs from "fs";
import path from "path";
import express, { Router } from "express";
import Mustache from "mustache";

import config from "../utils/config";
// import oidc from "../utils/oidc";
import { logger } from "../utils/logger";

const router = Router();

// Serve Confetti stylesheet
const stylesPath = require.resolve("@kazoohr/confetti/build/styles.css");
const staticRoot = path.dirname(stylesPath);

const confettiVersion = "16.5.2";
router.use(`/static/${confettiVersion}/confetti`, express.static(staticRoot));

const assetPath =
  config.get("NODE_ENV") === "production"
    ? path.join(__dirname, "../../assets")
    : path.join(__dirname, "../../../web/build");

router.use(express.static(assetPath, { index: false }));

router.get("/*", (_req, res) => {
  const { userContext } = _req as any;

  logger.info("User info", { userContext });

  const rawHtml = fs.readFileSync(`${assetPath}/index.html`, "utf8");

  const html = Mustache.render(rawHtml, {
    // We can inject config values here for the UI to use
    EXAMPLE: "It works!",
  });

  res.status(200).send(html);
});

export default router;
