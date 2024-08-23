import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavComponent from './components/NavComponent';
import FooterComp from './components/FooterComp';
import MovieCard from './components/HomeComp';

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>

      <main className='bg-dark'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </main>

      <footer>
        <FooterComp />
      </footer>
    </>
  );
}

export default App;
