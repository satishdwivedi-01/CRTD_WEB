import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded_user = jwt.verify(token, process.env.JWT_SECRET_KEY); // it returns value of user which was saved during generating token

    req.user = decoded_user; // setting req.user so that we can authorize user when needed with every request

    return next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized" });
  }
}

export default auth;
