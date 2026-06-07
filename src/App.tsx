import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AirFreight from "./pages/AirFreight";
import Freight from "./pages/Freight";
import LogisticsTransit from "./pages/LogisticsTransit";
import ClearingForwarding from "./pages/ClearingForwarding";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/services/freight" element={<Freight />} />
        <Route
          path="/services/logistics-transit"
          element={<LogisticsTransit />}
        />
        <Route
          path="/services/clearing-forwarding"
          element={<ClearingForwarding />}
        />
      </Route>
    </Routes>
  );
}

export default App;