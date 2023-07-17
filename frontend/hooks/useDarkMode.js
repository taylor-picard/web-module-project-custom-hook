
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialVal) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode',initialVal);
    return [darkMode, setDarkMode];
};

export default useDarkMode;