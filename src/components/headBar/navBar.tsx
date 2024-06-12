import styles from "./navBar.module.css";
import {PiCloudFill} from "react-icons/pi";
import LoginControl from "./loginControl.tsx";
export default function NavBar() {
  return <nav className={styles.navBar}>
    <PiCloudFill size="40"/>

    <LoginControl className={styles.loginButton}/>
  </nav>;
}