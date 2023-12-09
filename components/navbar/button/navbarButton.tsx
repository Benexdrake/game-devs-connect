import Link from "next/link"
import style from './style.module.css'

export const NavbarButton = (param:any) => {
    let text = param.text;
    let icon = param.icon;
    let path = param.path;


    return (
        <Link href={path} className={style.main}>
            <div className={style.icon}>
                <i className={icon}></i>
            </div>
            <div className={style.text}>
                {text}
            </div>
        </Link>
    )
}