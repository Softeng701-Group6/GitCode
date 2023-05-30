import { GeneralObject } from "../models/types.ts";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "./firebase.ts";
import { Collection } from "./firebaseEnums.ts";

/**
 * Store the object (or document in Firestore) into the database
 *
 * @param collectionName Collection name where the object will be store at
 * @param object Object to store
 */
export async function storeDocument(collectionName: Collection, object: GeneralObject): Promise<void> {
  const { id, ...data } = object;
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

/**
 * Get a document by its ID
 * Can either get the data only or the whole document
 *
 * @param collectionName
 * @param id
 */
export async function getDocumentById<T extends GeneralObject>(collectionName: Collection, id: string): Promise<T> {
  const docRef = doc(firestore, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Document does not exist");
  }

  const data: T = docSnap.data() as T;
  data.id = docSnap.id;

  return data;
}

/**
 * Check if the document exists in the database
 *
 * @param collectionName Collection name
 * @param id Document ID
 */
export async function isDocumentExists(collectionName: Collection, id: string): Promise<boolean> {
  const docRef = doc(firestore, collectionName, id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists();
}
