import { Gallery, ThemeToggle, SearchForm } from "./components";
import { useContext } from "react";
import { useGalleryContext } from "./assets/context";
const App = () => {
  const { isDarkTheme } = useContext(useGalleryContext);
  return (
    <main className={isDarkTheme ? "dark-theme" : "normal-theme"}>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
