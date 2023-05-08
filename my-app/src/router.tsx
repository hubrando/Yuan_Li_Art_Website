import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";
// import PaintingsPage from "./components/PaintingsPage";
import Root from "./routes/root";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/paintings">
          <PaintingsPage />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;