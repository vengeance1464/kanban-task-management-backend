import * as admin from 'firebase-admin';
import serviceAccount from "../service-account.json"

 const initializeApp=()=>{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as any),
      });
}

export {initializeApp}