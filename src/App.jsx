import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BusinessPlan from './BusinessPlan';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-plan" element={<BusinessPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
