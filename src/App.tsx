import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeLayout />
      <Footer />
    </div>
  );
}

export default App;
