import { useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const useFirebase = ()=>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{

        })
    }
    useEffect(()=> {
        onAuthStateChanged(auth,user =>{
            setUser(user);
        })
    },[])
return {user, handleSignOut, signInWithGoogle}
};
export default useFirebase;