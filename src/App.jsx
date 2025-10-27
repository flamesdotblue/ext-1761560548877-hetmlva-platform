import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <HeroSpline />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
