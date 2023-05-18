import styles from './BotaoSection.module.css';

function BotaoSection(props) {
    return (
        <>
            <div className= {styles.botaoSection}>
                <h3>{props.texto}</h3>
            </div>
        </>
     )
}

export default BotaoSection