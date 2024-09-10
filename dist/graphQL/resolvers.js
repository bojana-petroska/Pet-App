import petModule from "../petData.js";
const resolvers = {
    Query: {
        pets: () => petModule.getPets(),
        pet: (_, { id }) => {
            const idToNumber = parseInt(id);
            return petModule.getPet(idToNumber);
        },
    },
    Mutation: {
        createPet: (_, { pet }) => {
            return petModule.createPet(pet);
        },
        updatePetHappiness(_, { id, happiness }) {
            const idToNumber = parseInt(id);
            return petModule.updatePetHappiness(idToNumber, happiness);
        },
        deletePet(_, { id }) {
            const idToNumber = parseInt(id);
            return petModule.deletePet(idToNumber);
        },
    },
};
export default resolvers;
