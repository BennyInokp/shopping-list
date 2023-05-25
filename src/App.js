import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Component/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
