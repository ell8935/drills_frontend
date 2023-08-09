import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../../shared/services/firebase";
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithRedirect(auth, provider);
    console.log(123);

    // await saveUserinDb(user);
    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => {
  signOut(auth);
};

// const saveUserinDb = async (user: User) => {
//   await setDoc(
//     doc(db, "Users", user.uid),
//     {
//       uid: user.uid,
//       displayName: user.displayName,
//       email: user.email,
//     },
//     { merge: true }
//   );
// };

export { loginWithGoogle, googleLogout };
