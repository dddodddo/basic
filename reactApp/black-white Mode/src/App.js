import { useContext } from "react";
import "./App.css";
import { DarkModeProvider, DarkModeContext } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;

function Header() {}
function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}
function Footer() {}
function Profile() {}
function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}
function ProductDetail() {
  //useContext(어떤 context를 사용할 것인가) --> DarkModeContext를 사용할 것이다.
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        Toggle
      </button>
    </div>
  );
}
