import { Route, Routes } from "react-router";
import CloudsBG from "./components/CloudsBG/CloudsBG";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProcessPage from "./pages/ProcessPage/ProcessPage";
import ProjectProcessPage from "./pages/ProjectProcessPage/ProjectProcessPage";
import ResearchPage from "./pages/ProjectProcessPage/ResearchPage/ResearchPage";
import DesignPage from "./pages/ProjectProcessPage/DesignPage/DesignPage";
import CodePage from "./pages/ProjectProcessPage/CodePage/CodePage";
import CasePage from "./pages/CasePage/CasePage";
import CaseCategoryPage from "./pages/CasePage/CaseCategoryPage";
import { CASE_CATEGORIES } from "./utils/caseHelpers";

function App() {
  return (
    <>
      <Navbar />
      <CloudsBG />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/process/:slug" element={<ProjectProcessPage />} />
          <Route path="/process/:slug/research" element={<ResearchPage />} />
          <Route path="/process/:slug/design" element={<DesignPage />} />
          <Route path="/process/:slug/code" element={<CodePage />} />
          <Route path="/cases/:slug" element={<CasePage />} />
          <Route path="/cases/:slug/research" element={<CaseCategoryPage category={CASE_CATEGORIES.research} />} />
          <Route path="/cases/:slug/optimization" element={<CaseCategoryPage category={CASE_CATEGORIES.optimization} />} />
          <Route path="/cases/:slug/afterthought" element={<CaseCategoryPage category={CASE_CATEGORIES.afterthought} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
