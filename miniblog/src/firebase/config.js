import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQoHj2Nr9eeStyhauP58Fcr2JxeGrdxN8",
  authDomain: "miniblog-19ca9.firebaseapp.com",
  projectId: "miniblog-19ca9",
  storageBucket: "miniblog-19ca9.firebasestorage.app",
  messagingSenderId: "337597761725",
  appId: "1:337597761725:web:36ec34af167f2ce7ea8fd4"
};

// Inicializando o Firebase
initializeApp(firebaseConfig);  // Não precisamos exportar o app, apenas inicializamos

// Exportando os serviços necessários
export const auth = getAuth();  // O auth pode ser usado diretamente, sem precisar do app
export const db = getFirestore();  // Da mesma forma para o Firestore