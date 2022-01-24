import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import AdministratorDashboard from './pages/AdministratorDashboard';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/admin/:control" element={<AdministratorDashboard/>}/>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;