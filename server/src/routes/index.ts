import { Router } from "express";

import health from "./health";
import assets from "./assets";

const router = Router();

// Used by kubernetes
router.use("/_health", health);

// Assets are served on the root route
router.use(assets);

export default router;
