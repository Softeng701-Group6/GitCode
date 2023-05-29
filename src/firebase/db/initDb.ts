import {
  doc,
  deleteDoc,
  getDocs,
  collection,
  terminate
} from "firebase/firestore";
import { firestore } from "../firebase.ts";
import { Collection } from "../firebaseEnums.ts";
import { DUMMY_DATA_GRAPHS } from "../../data/dummyData.ts";
import { storeDocument } from "../firestoreUtils.ts";

main();

async function main() {
  console.log('Start!');
  console.log();

  await clearDatabase();
  console.log();

  await addGraphs();
  console.log();

  await addQuestions();
  console.log();

  // terminate() is optional, it is to close all Firestore connections and
  // free any resources used by the Firestore client.
  // If we don't call terminate(), it will automatically terminate itself after 1-2 minutes.
  await terminate(firestore);
  console.log('End!');
}

async function clearDatabase() {
  // In Firestore, you have to get all the documents of a collection by `getDocs()`
  // before deleting each of them `deleteDoc()`

  const collectionNames: string[] = Object.keys(Collection).map((key: string) => Collection[key as keyof typeof Collection]);

  for (const cName of collectionNames) {
    const allDocuments = await getDocs(collection(firestore, cName));
    for (const document of allDocuments.docs) {
      await deleteDoc(doc(firestore, cName, document.id));
    }

    console.log(`Deleted ${allDocuments.size} ${cName}`);
  }
}

async function addGraphs() {
  for (const graph of DUMMY_DATA_GRAPHS) {
    await storeDocument(Collection.GRAPHS, graph);

    console.log(`Added ${graph.name}`);
  }
}

async function addQuestions() {
  // const allGraphs = await getDocs(collection(firestore, Collection.GRAPHS));
  //
  // for (const question of DUMMY_DATA_QUESTIONS) {
  //   const initialGraph = allGraphs.docs.find(doc => {
  //     return doc.data().name === `${question.title} - Initial Graph`;
  //   });
  //   const goalGraph = allGraphs.docs.find(doc => {
  //     return doc.data().name === `${question.title} - Goal Graph`;
  //   });
  //
  //   question.initialGraph = initialGraph!.ref;
  //   question.goalGraph = goalGraph!.ref;
  //
  //   await storeDocument(Collection.QUESTIONS, question);
  //
  //   console.log(`Added ${question.title}`);
  // }
}
