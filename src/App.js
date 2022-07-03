import './styles.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Wall from './components/Wall';




function App() {
  return (
    <>
      <main className="bg-dark">
        <Nav />
        <div className="container">
          <Wall />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
