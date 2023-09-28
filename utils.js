import jwt from "jsonwebtoken";

export const context = async ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split("Bearer ")[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return { userId };
  }
};
