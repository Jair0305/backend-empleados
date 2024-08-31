import { db } from '../config/firebase.js';

const empleadoModel = {
    getEmpleadoById : async (id) => {
        return db.collection('empleados').doc(id).get();
    },
    getEmpleados : async () => {
        return db.collection('empleados').get();
    },
    getEmpleadoByCorreo : async (correo) => {
        const mail = db.collection('empleados').where('correo', '==', correo).get();

        if(mail.empty) {
            return null;
        }
        return mail.docs[0];
    },
    createEmpleado : async (empleado) => {
        return db.collection('empleados').add(empleado);
    },
    updateEmpleado : async (id, empleado) => {
        return db.collection('empleados').doc(id).update(empleado);
    },
    deleteEmpleado : async (id) => {
        return db.collection('empleados').doc(id).delete();
    }
}

export default empleadoModel;