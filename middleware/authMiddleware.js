import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) =>
{
    const token = req.header('Authorization');
    if(!token)
    {
        return res.status(401).json({
            success: false,
            message: "Token no proporcionado"
        });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>
    {
        if(err)
        {
            return res.status(401).json({
                success: false,
                message: "Token inválido"
            });
        }
        req.empleado = decoded;
        next();
    })
}

export default authMiddleware;