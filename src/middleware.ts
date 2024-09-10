import { Request, Response } from "express";

const createPet = (req: Request, res: Response, next: Function) => {
  const { name, species, color, size } = req.body;
  if (!name || !species) {
    res.status(400).send("Name and species are required");
    return;
  }
  next();
};

const updatePetHappiness = (req: Request, res: Response, next: Function) => {
  if (!req.body.happiness) {
    res.status(400).send(`happiness is required`);
    return;
  }
  next();
};

const deletePet = (req: Request, res: Response, next: Function) => {
  if (!req.body.id) {
    res.status(400).send(`id is required`);
    return;
  }
  next();
};

const auth = (req: Request, res: Response, next: Function) => {
  if (req.headers.authorization !== "Bearer test") {
    res.status(401).send("unauthoirized");
    return;
  }
  next();
};

export default {
  createPet,
  updatePetHappiness,
  deletePet,
  auth,
};
