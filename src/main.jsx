import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import BrowserRouter dari react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
