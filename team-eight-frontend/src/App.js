import "./App.css";
import { Provider } from "./components/ui/provider";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Provider>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
