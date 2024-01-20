import './App.css';
import HemoSurvey from './components/HemoSurvey';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="survey" element={<HemoSurvey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
