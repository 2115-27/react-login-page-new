import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/HandleLogin"
const pgRoute = () => {
  return (
    <Routes>
      <Route>
        <Route path="/react-login-page/" element={<App />} />
        <Route path="/react-login-page/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default pgRoute; 
