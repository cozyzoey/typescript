import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, 5, -2, 0]);
const charactersCollections = new CharactersCollection("spwreDF");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-5);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
