import { createRoot } from "react-dom/client";
import App from "./index";

it("renders without crashing", () => {
  createRoot(document.createElement("div")).render(<App />);
});
