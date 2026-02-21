import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Attraction from "./pages/AttractionPage";
import AboutIndonesia from "./pages/AboutIndonesia";
import ScenicSpotSearch from "./pages/ScenicSpot";
import QuickSearch from "./pages/QuickSearch";
import ScenicDetail from "./pages/ScenicDetail";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar active="Attraction" />

      <Routes>
        <Route path="/" element={<Navigate to="/attraction" replace />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/attraction/about" element={<AboutIndonesia />} />
        <Route path="/attraction/scenic" element={<ScenicSpotSearch />} />
        <Route path="/attraction/quick" element={<QuickSearch />} />
        <Route path="/attraction/scenic/:slug" element={<ScenicDetail />} />
        {/* <Route path="*" element={<Navigate to="/attraction" replace />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}
