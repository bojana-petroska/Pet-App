import { Router } from "express";
import petController from "./controller.js";
import petMiddleware from "./middleware.js";

const router = Router();

router.get("/", petController.getPets);
router.get("/:id", petController.getPet);
router.post("/", petMiddleware.createPet, petController.createPet);
router.patch(
  "/",
  petMiddleware.updatePetHappiness,
  petController.updatePetHappiness
);
router.delete(
  "/:id",
  petMiddleware.deletePet,
  petMiddleware.auth,
  petController.deletePet
);

export default router;
