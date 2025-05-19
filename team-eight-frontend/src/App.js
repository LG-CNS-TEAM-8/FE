// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
