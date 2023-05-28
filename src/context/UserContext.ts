import { createContext } from 'react';
import { User as FirebaseUser } from "firebase/auth";

export const UserContext = createContext<FirebaseUser | null>(null);