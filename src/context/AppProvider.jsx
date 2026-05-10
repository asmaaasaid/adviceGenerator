import { createContext , useState, useEffect, Children } from "react"

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState( localStorage.getItem("theme") || "dark");
  const [copied, setCopied] = useState(false);
  const [advice, setAdvice] = useState(null);
  const [favorite, setFavorite] = useState(()=>{
  const savedFavorite = localStorage.getItem("favorites");
    return savedFavorite ? JSON.parse(savedFavorite) : [];
  });

  // toggle dark and light mode
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  // save favorites to local storage
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite])

  // toggle advice favorite icon
  const toggleFavorite = (advice)=>{
    setFavorite((prev)=>{
      const existsFavorite = prev.find( item => item.id === advice.id);
       
      if(existsFavorite){
        return prev.filter( item => item.id !== advice.id )
      }
      else{
        return [...prev, advice]
      }
    })
  } 

  return (
    <AppContext.Provider
      value={{ theme, setTheme, copied, setCopied, advice, setAdvice, favorite, toggleFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;