import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Header from "./shared/components/Header";

function App() {
  return (
  <>
  <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  </>
  );
}

export default App;
