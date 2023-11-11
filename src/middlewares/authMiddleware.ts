import  { Request, Response, NextFunction } from 'express';
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";

export const isRequestAuthenticated=async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization?.split('Bearer ')[1];

    if(!token || token===null)
    {
        return res.status(401).send('Unauthorized');
    }

     try
     {
        const credential = GoogleAuthProvider.credential(token);
        const auth = getAuth();
        const signInResult= await signInWithCredential(auth, credential);
        if(signInResult.status===200)
        {
            next()
        }
        else
        {
            return res.status(401).send('Unauthorized');
        }
     }
     catch(error:any)
     {
        const errorCode = error.code;
        const errorMessage = error.message;
  // The email of the user's account used.
        const email = error.customData.email;
      // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
     }
}