// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import SignupPage from "./pages/SignupPage";
import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
