import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import SignDetails from "./pages/SignDetails";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dicionario" element={<Dictionary />} />
          <Route path="/sinais/:id" element={<SignDetails />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/resultado" element={<QuizResult />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
