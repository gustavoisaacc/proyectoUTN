import { app } from "./app";
import { PORT } from "./config/config";

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
