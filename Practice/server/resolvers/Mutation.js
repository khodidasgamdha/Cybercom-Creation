const { v4 } = require("uuid");

const Mutation = {
    addAnimal: (_, payload, { animals }) => {
        let newAnimal = {
            id: v4(),
            ...payload
        };
        animals.push(newAnimal);
        return newAnimal;
    },

    removeAnimal: (_, { id }, { animals }) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id;
        });
        animals.splice(index, 1);
        return true;
    },

    updateAnimal: (
        parent,
        {
            id,
            image,
            title,
            rating,
            price,
            description,
            stock,
            onSale,
            slug,
            category,
        },
        { animals }
    ) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id;
        });
        if (image != undefined) animals[index].image = image;
        if (title != undefined) animals[index].title = title;
        if (rating != undefined) animals[index].rating = rating;
        if (price != undefined) animals[index].price = price;
        if (description != undefined) animals[index].description = description;
        if (stock != undefined) animals[index].stock = stock;
        if (slug != undefined) animals[index].slug = slug;
        if (category != undefined) animals[index].category = category;
    },
};

module.exports = Mutation;
