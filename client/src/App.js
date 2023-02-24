import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
