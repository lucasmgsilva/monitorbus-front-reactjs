import { BrowserRouter } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UserDashboard/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;