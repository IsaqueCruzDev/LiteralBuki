import styles from "./Valor120px.module.css";

function Valor120px(props) {
    return (
        <p className= {styles.palavra}>{ props.palavra }</p>
    )
}

export default Valor120px;