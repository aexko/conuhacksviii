import './App.css';
import HemoSurvey from './components/HemoSurvey';
import HomePage from './components/HomePage';
import SurveyDone from './components/SurveyDone';
import HemoMeds from './components/HemoMeds'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="survey" element={<HemoSurvey />} />
          <Route path="survey-done" element={<SurveyDone />} />
          <Route path="medications" element={<HemoMeds />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
