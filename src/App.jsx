import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";

import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}