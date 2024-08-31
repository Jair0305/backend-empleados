import empleadoRepository from "../repositories/empleadoRepository.js";
import authService from "../services/empleadoService.js";

const empleadoController = {

    createEmpleado: async (req, res) => {
        try {
            const empleado = req.body;
            empleado.contrasena = authService.hashPassword(empleado.contrasena);
            const created = await empleadoRepository.createEmpleado(empleado);
            const id = created.id;
            res.status(201).json({
                success: true,
                id
            });
        }catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    loginEmpleado: async (req, res) => {
        try {
            const {correo, contrasena} = req.body;
            const empleado = await empleadoRepository.getEmpleadoByCorreo(correo);
            if(!empleado) {
                res.status(404).json({
                    success: false,
                    message: "Empleado no encontrado"
                });
            }
            if(!authService.comparePassword(contrasena, empleado.contrasena)) {
                res.status(401).json({
                    success: false,
                    message: "Contraseña incorrecta"
                });
            }
            const token = authService.generateToken(empleado);
            res.status(200).json({
                success: true,
                message: "Empleado logueado",
                data: token
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

}

export default empleadoController;