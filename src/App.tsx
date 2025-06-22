import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticlesPage from './components/ArticlesPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
