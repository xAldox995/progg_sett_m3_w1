import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavComponent from './components/NavComponent';
import FooterComp from './components/FooterComp';
import MoviesComp from './components/MoviesComp';

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>

      <main className='bg-dark'>
        <MoviesComp title='Star Wars Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Star%20Wars' />
        <MoviesComp title='Toretto Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Fast&Furious' />
        <MoviesComp title='Harry Potter Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Harry%20Potter' />
      </main>

      <footer>
        <FooterComp />
      </footer>
    </>
  );
}

export default App;
