import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ITSikkerhedPage from "./components/Pages/ITSikkerhedPage.jsx";
import KampagnespilPage from "./components/Pages/KampagnespilPage.jsx";
import InnovationPage from "./components/Pages/InnovationPage.jsx";
import ProgrammeringPage from "./components/Pages/ProgrammeringPage.jsx";
import InteraktionsdesignPage from "./components/Pages/InteraktionsdesignPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route index element={<ITSikkerhedPage />} />
      <Route path="kampagnespil" element={<KampagnespilPage />} />
      <Route path="innovation" element={<InnovationPage />} />
      <Route path="programmering" element={<ProgrammeringPage />} />
      <Route path="interaktionsdesign" element={<InteraktionsdesignPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
