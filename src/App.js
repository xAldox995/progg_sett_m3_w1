import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavComponent from './components/NavComponent';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>

      <main className='bg-dark'>

      </main>

      <footer>
        <FooterComp />
      </footer>
    </>
  );
}

export default App;
