import { GeneralObject } from "../models/types.ts";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "./firebase.ts";
import { Collection } from "./enums.ts";

/**
 * Store the object (or document in Firestore) into the database
 *
 * @param collectionName Collection name where the object will be store at
 * @param object Object to store
 */
export async function storeDocument(collectionName: Collection, object: GeneralObject): Promise<void> {
  const {id, ...data} = object;
  let docRef;

  // If ID is provided, then update the document
  // Otherwise, add a new document
  if (id) {
    docRef = doc(firestore, collectionName, id);
  } else {
    docRef = doc(collection(firestore, collectionName));
  }

  await setDoc(docRef, data);
}

/**
 * Get all objects (or documents in Firestore) from the database
 *
 * @param collectionName Collection name where the object will be retrieved from
 */
export async function getCollection<T extends GeneralObject>(collectionName: string): Promise<T[]> {
  const allDocs = await getDocs(collection(firestore, collectionName));

  return allDocs.docs.map(doc => {
    const data: T = doc.data() as T;
    data.id = doc.id;

    return data;
  });
}
