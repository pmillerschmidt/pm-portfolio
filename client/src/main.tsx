import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Router, Route, Switch } from "wouter";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import MusicPage from "./pages/MusicPage";
import MusicDetailPage from "./pages/MusicDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <Router base="/">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/:id" component={ProjectDetailPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/music/:id" component={MusicDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
  </Router>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
