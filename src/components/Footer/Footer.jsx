import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';


const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Home" />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <a href="https://www.linkedin.com/in/atakan-moldomamytov/">Atakan Moldomamytov</a>
            </div>

            <div className={styles.socials}>
                <a href="">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>

            </div>
        </section>
    )
}

export default Footer
