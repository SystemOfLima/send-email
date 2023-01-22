import "dotenv/config";
import { App } from "./server";

const PORT = process.env.PORT || 2323;

App.listen(PORT, () => {
  console.log(`Running Aplication! \n - Port: ${PORT}`);
});
