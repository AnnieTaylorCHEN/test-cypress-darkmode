import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import GlobalStyles from "../styles";

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const darkmodeQuery = query.get("darkmode");


  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    try {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          setDarkMode(e.matches);
        });
    } catch (e1) {
      try {
        window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
          setDarkMode(e.matches);
        });
      } catch (e2) {
        setDarkMode(false);
      }
    }

    if (darkmodeQuery === "true") {
      setDarkMode(true);
    } else if (darkmodeQuery === "false") {
      setDarkMode(false);
    }
  }, [darkmodeQuery]);

  return (
    <>
      <GlobalStyles darkmode={darkMode} />
      {children}
      <h1>{JSON.stringify(darkMode)}</h1>
    </>
  );
};

export default Provider;
