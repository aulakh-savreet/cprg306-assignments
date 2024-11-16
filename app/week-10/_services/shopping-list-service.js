import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, getDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const q = query(collection(db, 'users', userId, 'items'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, 'users', userId, 'items'), item);
  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
};
