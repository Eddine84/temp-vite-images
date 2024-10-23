import { createContext, useEffect, useState } from "react";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkTheme");
  if (storedDarkMode === null) {
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  }
  return storedDarkMode === true;
};

export const useGalleryContext = createContext();
const AppContext = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(getInitialDarkMode());
  const [query, setQuery] = useState("cat");
  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
    // const body = document.querySelector("body");
    // const getInitialDarkMode = () => {
    //   const prefersDarkMode = window.matchMedia(
    //     "(prefers-color-scheme: dark)"
    //   ).matches;
    //   const storedDarkMode = localStorage.getItem("darkTheme");

    //   if (storedDarkMode === null) {
    //     return prefersDarkMode;
    //   }

    //   return storedDarkMode === "true";
    // };
    // body.classList.toggle("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const searchPhotos = (query) => {
    setQuery(query);
  };
  return (
    <useGalleryContext.Provider
      value={{ toggleTheme, isDarkTheme, searchPhotos, query }}
    >
      {children}
    </useGalleryContext.Provider>
  );
};

export default AppContext;
