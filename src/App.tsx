import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChurchHubLanding from "./pages/ChurchHubLanding";
import { PaymentSuccess } from "./pages/PaymentSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChurchHubLanding />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
