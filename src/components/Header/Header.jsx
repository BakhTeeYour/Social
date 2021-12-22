import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (<header className={s.header}>
            <img src="https://автолого.рф/wp-content/uploads/mercedes-benz-logo-2011-1920x1080.png" className={s.logo}
                 alt="Logo Mercedes"/>
        </header>

    )
}

export default Header;