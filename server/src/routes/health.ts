import { Router } from "express";

const router = Router();

router.get("/ready", async (_req, res) => {
  return res.status(200).send("Ready");
  // return res.status(500).send("Not ready");
});

router.get("/alive", async (_req, res) => {
  return res.status(200).send("Alive");
  // return res.status(500).send("Not alive");
});

export default router;
