"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, 5, -2, 0]);
const charactersCollections = new CharactersCollection_1.CharactersCollection("spwreDF");
const sorter = new Sorter_1.Sorter(charactersCollections);
sorter.sort();
console.log(charactersCollections.data);
