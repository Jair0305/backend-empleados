import admin from 'firebase-admin';
import serviceAccount from './chatdelvideo-firebase-adminsdk-uk3ux-0ba04d2b12.json' with {type:'json'};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore();

export {db};