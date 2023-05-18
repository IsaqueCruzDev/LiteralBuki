import styles from './ComoArtista.module.css';

function ComoArtista() {
    return (
        <>
            <section className= {styles.comoArtista}>
                <h2>Como Artista,</h2>
                <p>Você é motivado pela paixão, criatividade e imaginação.<br/>
                    A <span>Buki é motivada</span> pelo desejo de <span>abrir o seu caminho até o sucesso</span><br/> e te oferecer <span>independência e poder</span> de decisão.</p>
                <button type="button">Venha descobrir mais</button>
            </section>
        </>
    )
}

export default ComoArtista