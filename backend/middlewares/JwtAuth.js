import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token =
    req.cookies.token ||
    req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded_user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded_user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}

export default auth;

