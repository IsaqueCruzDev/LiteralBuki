import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuMobile.module.css';
    const MenuMobile = () => {

        return (
            <>
                <button>
                    <FontAwesomeIcon icon={faBars} className= {styles.iconMenu} />
                </button>
                <nav id= {styles.nave} className= {styles.estilo}>
                    <ul>
                        <li><a href="#link">Home</a></li>
                        <li><a href="#link">Sobre nós</a></li>
                        <li><a href="#link">Blog</a></li>
                        <li><a href="#link">Contato</a></li>
                        <li><a href="#link" className= {styles.botaoEntrar}>Entrar</a></li>
                    </ul>
                </nav>
            </>
        );
    }

export default MenuMobile;
