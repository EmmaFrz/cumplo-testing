import { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Indicators from '../components/Indicators';
import Graph from '../components/Graph';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import AppContext from "../context/appContext";
import './App.css';

function App() {
  const { loading } = useContext(AppContext);
  return (
      <>
        {loading && <Loader />}
        {!loading && 
          <section className='container'>
            <SearchBar />
            <Indicators />
            <Graph />
            <Footer>
              Creado Por Emmanuel para la prueba tecnica de Cumplo 💪
            </Footer>
          </section>
        }
      </>
  );
}

export default App;
