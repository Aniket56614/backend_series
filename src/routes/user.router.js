import { Route } from "express";
import { registerUser } from "../controller/user.controller.js";
const router = router()

router.route("/register").post(registerUser)

export default router