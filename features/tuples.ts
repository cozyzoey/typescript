const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; // Type alias
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

const carSpecs: [number, number] = [400, 3345];
const carStats = {
  horsepower: 400,
  weight: 3345,
};
