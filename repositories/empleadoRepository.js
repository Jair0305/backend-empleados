import empleadoModel from "../models/empleadoModel.js";

const empleadoRepository = {
    getEmpleadoById: async (id) => {
        await empleadoModel.getEmpleadoById(id);
    },
    getEmpleadoByCorreo: async (correo) => {
        await empleadoModel.getEmpleadoByCorreo(correo);
    },
    createEmpleado: async (empleado) => {
        await empleadoModel.createEmpleado(empleado)

    },
    updateEmpleado: async (id, empleado) => {
        await empleadoModel.updateEmpleado(id, empleado);
    },
    deleteEmpleado: async (id) => {
        await empleadoModel.deleteEmpleado(id);
    }
}

export default empleadoRepository;