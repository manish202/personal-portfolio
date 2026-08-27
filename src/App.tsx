import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router";
import router from "./router";
import "./App.css";

const App = () => {
  return <RouterProvider router={router} />
}

export default App;