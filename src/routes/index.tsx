import { Experiences } from "pages/experiences";
import { Home } from "pages/home";
import { DefaultLayout } from "pages/layout";
import { Personal } from "pages/personal";
import { Projects } from "pages/projects";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/personal" element={<Personal />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
