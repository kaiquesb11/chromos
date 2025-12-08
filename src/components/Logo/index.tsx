import styles from "./styles.module.css";
import { TimerIcon } from "lucide-react";

export function Logo() {
    return (    
        <div className={styles.logo}>
            <a className={styles.logoLink} href="#">
                <TimerIcon size={64} />
                <span>Chromo</span>
            </a>
        </div>
    ); 
} 