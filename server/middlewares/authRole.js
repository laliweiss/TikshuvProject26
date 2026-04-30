export function requireRole(role) {
  return (req, res, next) => {
    const userRole = req.headers["x-role"];

    if (!userRole) {
      return res.status(401).json({ message: "No role provided" });
    }

    if (userRole !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
}