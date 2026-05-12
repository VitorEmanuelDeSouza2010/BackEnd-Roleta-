import { response, Router } from "express";

import sortController from "./controllers/Sorteio";

const routes = Router();

routes.get("/", (request, response) => response.status(200).json({ success: true }));

routes.post("/Sort", sortController.create);

export default routes;