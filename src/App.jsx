import Advice from './components/advice-component/Advice';
import AppProvider from './context/AppProvider';
import Router from './router/Router';

function App() {
  // const [theme, setTheme] = useState("light");

  // //  
  
  return (
    <AppProvider>
      {/* <Advice /> */}
      <Router/>
    </AppProvider>
  
);
}

export default App
