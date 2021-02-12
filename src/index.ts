import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// const numbersCollection = new NumbersCollection([116, 3, -5, 0]);
// const charactersCollection = new CharactersCollection("xnnTioKbk");
// new Sorter(charactersCollection).sort();
// console.log(charactersCollection.data);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-4);
linkedlist.add(3);
const sorter = new Sorter(linkedlist);
sorter.sort();
linkedlist.print();
