import React, { useContext } from "react";
import { useGalleryContext } from "../assets/context";
import { CiLight } from "react-icons/ci";

import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useContext(useGalleryContext);
  return (
    <section className="toggle-container">
      <button onClick={toggleTheme} className="dark-toggle">
        {" "}
        {isDarkTheme ? (
          <MdDarkMode className="toggle-icon" style={{ color: "#fff" }} />
        ) : (
          <CiLight className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
