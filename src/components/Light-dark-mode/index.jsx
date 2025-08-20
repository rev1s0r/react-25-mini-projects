import UseLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {

    const [theme, setTheme] = UseLocalStorage('theme',"dark");

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log("Current theme:", theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Light/Dark Mode Toggle</p>
        <button onClick={handleToggleTheme}>Toggle Mode</button>
      </div>
    </div>
  );
}
