import ReactDOM from "react-dom/client";
import { Provider } from "./providers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider />
);
