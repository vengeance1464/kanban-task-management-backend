import  { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';
import { InputRequest } from '../types';


export const isRequestAuthenticated=async (req:InputRequest,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization?.split('Bearer ')[1];

    if(!token || token===null)
    {
        return res.status(401).send('Unauthorized');
    }

     try
     {

        const decodedToken =await admin.auth().verifyIdToken(token)
        console.log('ID Token correctly decoded', decodedToken);
        req.user = decodedToken;
        next();
    
     }
     catch(error:any)
     {
        console.error('Error while verifying Firebase ID token:', error);
        res.status(403).send('Unauthorized');
        return;
     }
}