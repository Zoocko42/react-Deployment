import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imported pages and components
import Nav from './components/Nav';
import AboutMe from './components/Aboutme';
import MyWork from './components/Mywork';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <AboutMe></AboutMe>
        <MyWork></MyWork>
      </Router>
    </div>
  );
}

export default App;
