import styles from './TextoSection.module.css';
import Proptypes from 'prop-types';

function TextoSection(props) {
    return (
            <div className= {styles.seguraTexto}>
            <h2 className= { styles.titulo}>{props.titulo} <span className= { styles.tituloForte}>{props.tituloForte}</span> </h2>
            
            <p className= { styles.paragrafo}>{props.paragrafo}</p>
            </div>
    ) 
}

export default TextoSection