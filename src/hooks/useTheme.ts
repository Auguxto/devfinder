import { useEffect, useState } from "react";
import { Theme } from "../types/devfinder";
import { getFromLS, setToLS } from "../utils/storage";

interface ReturnProps {
  theme: Theme;
  themeLoaded: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): ReturnProps => {
  const themes = getFromLS("all_themes");
  const [theme, setTheme] = useState<Theme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const toggleTheme = () => {
    if (theme.name === "Light") {
      setTheme(themes.dark);
      setToLS("theme", themes.dark);
    } else {
      setTheme(themes.light);
      setToLS("theme", themes.light);
    }
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.dark);
    if (!localTheme) setToLS("theme", themes.dark);
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { theme, themeLoaded, toggleTheme };
};
