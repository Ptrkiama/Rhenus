import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import AirFreight from "./Pages/AirFreight";
import Freight from "./Pages/Freight";
import LogisticsTransit from "./Pages/LogisticsTransit";
import ClearingForwarding from "./Pages/ClearingForwarding";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/air-freight" element={<AirFreight />} />
<Route path="/services/freight" element={<Freight />} />
<Route path="/services/logistics-transit" element={<LogisticsTransit />} />
<Route path="/services/clearing-forwarding" element={<ClearingForwarding />} />
    </Routes>
  );
}

export default App;