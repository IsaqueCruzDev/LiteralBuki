import styles from './ImagemSection.module.css';

function ImagemSection(props) {
    return (
        <div className= {styles.sectionImage}>
            <img src={props.foto} alt="imagem com desenvolvedores analisando códigos" className= {styles.imagemSection} />
        </div>
    )
}

export default ImagemSection