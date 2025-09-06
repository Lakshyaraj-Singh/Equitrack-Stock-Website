import jwt from "jsonwebtoken";
export const  Auth=(req,res,next)=>{
    const autHeader=req.headers["authorization"];
    if(!authHeader) return res.status(401).json({ message: 'Access token required' });
    const token = authHeader.split(' ')[1];
    if (!token)  return res.status(401).json({ message: 'Access token required' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user=decoded.userId;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(403).json({ message: 'Invalid or expired token' });
        
    }
}