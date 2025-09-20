import Navbar from "./components/layout/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
