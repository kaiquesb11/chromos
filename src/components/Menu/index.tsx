import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";

type TiposdeThemes = "dark" | "light";

export function Menu() {
    const [theme, setTheme] = useState<TiposdeThemes>(()=> {
        const storageTheme =
        (localStorage.getItem("theme") as TiposdeThemes)  || "dark";
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemeChange (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); //não direicona para o link
        console.log ("Clicado", Date.now())
        setTheme (prevTheme =>{
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        });
        
    }

    useEffect(() => {
        document .documentElement.setAttribute ( "data-theme", theme );
        localStorage.setItem( "theme", theme);
    }, [theme]); // executa apenas quando o tema muda

return (    
    <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" 
        aria-label="Ir para Home" 
        title="Ir para Homme"
        >
            <HouseIcon />

        </a>
        <a className={styles.menuLink} href="#"
        aria-label="Ver Hitórico" 
        title="Ver Hitórico"
        >
            <HistoryIcon />

        </a>
        <a className={styles.menuLink} href="#"
        aria-label="Ir para Configurações" 
        title="Ir para Configurações"
        >
            <SettingsIcon />

        </a>
        <a className={styles.menuLink} href="#"
        aria-label="Mudar Tema" 
        title="Mudar Tema"
        onClick={handleThemeChange}
        >
            {nextThemeIcon[theme]}
        </a>
    </nav>
); 
} 