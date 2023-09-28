import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);ㄴ

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    );
}

export default App;