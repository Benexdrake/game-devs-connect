import { Button } from "./button/button"
import { NavbarButton } from "./button/navbarButton"
import styles from './style.module.css'

export default function Navbar()
{
    
    return (
        <div className={styles.nav}>
            <NavbarButton text='' icon='fa-solid fa-house' path=''/>
            <NavbarButton text='Home' icon='fa-solid fa-house' path=''/>
            <NavbarButton text='Notification' icon='fa-solid fa-bell' path=''/>
            <NavbarButton text='Trends' icon='fa-solid fa-arrow-trend-up' path=''/>
            <NavbarButton text='Profil' icon='fa-solid fa-user' path=''/>
            <br />
            <Button/>
        </div>
    )
}