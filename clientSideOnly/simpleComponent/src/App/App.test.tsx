import { createRoot } from "react-dom/client";
import App from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  createRoot(document.createElement("div")).render(<App />);
});
