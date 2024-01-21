import './App.css';
import HemoSurvey from './components/HemoSurvey';
import HomePage from './components/HomePage';
import SurveyDone from './components/SurveyDone';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="survey" element={<HemoSurvey />} />
          <Route path="survey-done" element={<SurveyDone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
