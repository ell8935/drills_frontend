import { auth } from "../../../shared/services/firebase";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithRedirect(auth, provider);

    // await saveUserinDb(user);
    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => {
  signOut(auth);
};

export { loginWithGoogle, googleLogout };
