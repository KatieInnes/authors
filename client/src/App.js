import './App.css';
import AuthorsMain from './components/AuthorsMain';
import AuthorForm from './components/AuthorForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AuthorsMain /> } />
        <Route path="/new" element= { <AuthorForm /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
