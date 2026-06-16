import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

import LearnPage from "./pages/learn/Page";
import TechnologiesIntroFrontendPage from "./pages/learn/pages/TechnologiesIntroFrontend";
import TechnologiesBackendPage from "./pages/learn/pages/TechnologiesBackend";
import TechnologiesDatabasePage from "./pages/learn/pages/TechnologiesDatabase";
import ToolsPage from "./pages/learn/tools/Page";
import DevOpsPage from "./pages/learn/devops/Page";
import ConclusionPage from "./pages/learn/conclusion/Page";

import HTMLPage from "./pages/html/Page";
import HTMLBasicsPage from "./pages/html/pages/Basics";

import Sidebar from "./components/Sidebar";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // Rendu states maintained: okati animation loading screen ki, inkoti router view dynamic string render key ki!
  const [animationState, setAnimationState] = useState("idle"); // "idle" | "fadingIn" | "fadingOut"
  const [displayLocation, setDisplayLocation] = useState(location);

  // External Sidebar or Elements dynamic navigation triggers handle cheyali kada! 🥰
  // Enni component links unna e central logic setup pipeline direct control teesukuntundi!
  useEffect(() => {
    // URL change direct trigger detect aithe start the block sequence
    if (location.pathname !== displayLocation.pathname) {
      setAnimationState("fadingIn");

      // 💡 STEP 1: Wait 500ms untill purple overlay screen completes its fade-in opacity 1 setup!
      const timer = setTimeout(() => {
        // STEP 2: Pure complete black-out overlay time frame lo page change execute! 🎬
        setDisplayLocation(location);
        window.scrollTo({ top: 0, behavior: "instant" });

        // STEP 3: Switch state to fade-out clean visibility 🌟
        setAnimationState("fadingOut");
      }, 500); // Overlay complete animation time

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  // Fade out complete sequence check parameters clean tracking!
  useEffect(() => {
    if (animationState === "fadingOut") {
      const timer = setTimeout(() => {
        setAnimationState("idle");
      }, 500); // Fade out finish block duration setup 🕒
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  return (
    <div
      className={`page`}
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔮 Sequential Purple Overlay Screen Pipeline */}
      <AnimatePresence>
        {animationState !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            // Jabbu character skill loops dynamic active transitions sync configuration match:
            animate={{ opacity: animationState === "fadingIn" ? 1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              minHeight: "100vh",
              zIndex: 50,
              backgroundColor: "black",
              pointerEvents: "all",
            }}
          />
        )}
      </AnimatePresence>

      {/* 💡 Crucial Twist: standard location context change aagipoyi displayLocation current local sync elements thoti mathrame update avthundi! */}
      <div className="z-10 h-full w-full">
        <Routes location={displayLocation} key={displayLocation.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route
          path="/learn/technologies"
          element={<TechnologiesIntroFrontendPage />}
        />
        <Route
          path="/learn/technologies/backend"
          element={<TechnologiesBackendPage />}
        />
        <Route
          path="/learn/technologies/database"
          element={<TechnologiesDatabasePage />}
        />
        <Route path="/learn/tools" element={<ToolsPage />} />
        <Route path="/learn/dev-ops" element={<DevOpsPage />} />
        <Route path="/learn/conclusion" element={<ConclusionPage />} />

        <Route path="/html/history" element={<HTMLPage />} />
        <Route path="/html/basics" element={<HTMLBasicsPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".swipe-from-left",
      {
        x: "-500%",
        opacity: 0,
        filter: "blur(30px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.3,
        stagger: 0.1,
      },
    );
  });
  return (
    <BrowserRouter>
      <div style={{ display: "flex", width: "100vw", minHeight: "100vh" }}>
        <Sidebar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
