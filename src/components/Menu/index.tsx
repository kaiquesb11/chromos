import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";

type TiposdeThemes = "dark" | "light";

export function Menu() {
    const [theme, setTheme] = useState<TiposdeThemes>("dark");
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

    return () => {
        console.log( "Olha, este componente está atualizado" );
    };
}, [theme]);

return (    
    <nav className={styles.menu}>
        <h1>{theme}</h1>
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
            <SunIcon />

        </a>
    </nav>
); 
} 