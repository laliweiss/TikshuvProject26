import app from "./app.js";
import { simulateMovement } from "./services/simulationService.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});

setInterval(async () => {
  try {
    await simulateMovement();
  } catch {}
}, 60000);