import { ZodError } from "zod";

export const validateData = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issu) => ({
          issue: issu.message,
          path: issu.path,
        }))
      );
    }

    return res.status(500).json({ error: "Internal server error" });
  }
  return;
};
