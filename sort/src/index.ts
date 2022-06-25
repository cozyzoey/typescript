import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, 5, -2, 0]);
const charactersCollections = new CharactersCollection("spwreDF");
const sorter = new Sorter(charactersCollections);
sorter.sort();
console.log(charactersCollections.data);
