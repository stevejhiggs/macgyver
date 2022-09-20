import { createRoot } from "react-dom/client";
import { Provider } from "unstated";
import App from "./ui/pages/Home";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider>
    <App />
  </Provider>
);
