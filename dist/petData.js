var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let pets = [
    { id: 1, name: "Fluffy", species: "Cat", happiness: 50 },
    { id: 2, name: "Buddy", species: "Dog", happiness: 60 },
];
// CRUD
const getPets = () => pets;
const getPet = (id) => pets.find((pet) => pet.id === id);
const createPet = (_a) => {
    var { name, species } = _a, rest = __rest(_a, ["name", "species"]);
    const newPet = Object.assign({ id: pets.length + 1, name,
        species, happiness: 50 }, rest);
    pets.push(newPet);
    return newPet;
};
const updatePetHappiness = (id, happiness) => {
    const pet = pets.find((pet) => pet.id === id);
    if (pet) {
        pet.happiness = happiness;
        return pet;
    }
    return null;
};
const deletePet = (id) => {
    const petIndex = pets.findIndex((pet) => pet.id === id);
    if (petIndex >= 0) {
        const pet = pets[petIndex];
        pets.splice(petIndex, 1);
        return pet;
    }
    return null;
};
export default {
    getPets,
    getPet,
    createPet,
    updatePetHappiness,
    deletePet,
};
