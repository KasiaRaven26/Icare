import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
         <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
