import petModule from "./petData.js";
const getPets = (req, res) => {
    res.json(petModule.getPets());
};
const getPet = (req, res) => {
    const id = parseInt(req.params.id);
    const pet = petModule.getPet(id);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).send(`Pet with id ${id} not found`);
    }
};
const createPet = (req, res) => {
    const newPet = petModule.createPet(req.body);
    res.json(newPet);
};
const updatePetHappiness = (req, res) => {
    const id = parseInt(req.params.id);
    const happiness = parseInt(req.body.happiness);
    const pet = petModule.updatePetHappiness(id, happiness);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).send(`Pet with id ${id} not found`);
    }
};
const deletePet = (req, res) => {
    const id = parseInt(req.params.id);
    const pet = petModule.deletePet(id);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).send(`Pet with id ${id} not found`);
    }
};
export default {
    getPets,
    getPet,
    createPet,
    updatePetHappiness,
    deletePet,
};
