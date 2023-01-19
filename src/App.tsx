import './App.css';
import GlobalStyle from './styles/global'
import Dashboard from './components/Dashboard';
import { CalculateProvider } from './context/calculateContext';

function App() {
  return (
    <>
    <CalculateProvider>
      <GlobalStyle/>
      <Dashboard/>
    </CalculateProvider>
    </>
  );
}

export default App;
