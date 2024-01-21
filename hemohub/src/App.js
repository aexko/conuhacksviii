import './App.css';
import HemoSurvey from './components/HemoSurvey';
import HomePage from './components/HomePage';
import ChatBot from './components/ChatBot';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="survey" element={<HemoSurvey />} />
          <Route path="chatbot" element={<ChatBot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
