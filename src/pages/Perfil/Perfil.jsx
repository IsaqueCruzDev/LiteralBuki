import "./Perfil.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";
import Perfilll from "../../assets/img/perfilll/foto sidebar.svg"
import Imagem2 from "../../assets/img/perfilll/Rectangle 60.svg"
import Destaque1 from "../../assets/img/perfilll/Ellipse 22.svg"
import Destaque2 from "../../assets/img/perfilll/Ellipse 23.svg"
import Destaque3 from "../../assets/img/perfilll/Ellipse 24.svg"



export default function Perfil () {
    return (
        <section>
            <Sidebar tipoItem1="abaEscolhida"
                itemSidebar1={<ItemSidebar nomeItem="Meu Perfil" icon="fa-solid fa-user" />}
                itemSidebar2={<ItemSidebar nomeItem="Feed" icon="fa-solid fa-home" />}
                itemSidebar3={<ItemSidebar nomeItem="Chat" icon="fa-solid fa-solid fa-comment" />}
                itemSidebar4={<ItemSidebar nomeItem="Notificações" icon="fa-solid fa-bell" />}
                itemSidebar5={<ItemSidebar nomeItem="Meu Projeto" icon="fa-solid fa-lightbulb" />}
        
            />
            <div className="content">
        <div className="flex">
            <div className="foto-perfil">
                <img src={Perfilll} alt=""/>
            </div>
            <div className="editar-perfil">
                <div className="editar">
                    <h6>iamcamilla</h6>
                </div>
                <div className="editar2">
                   <a href="index2.html"><button>Editar Perfil</button></a> 
                </div>
            </div>
        </div>
        <div className="info2">
            <div className="numero-pub">
                <h3>8 publicações</h3>
            </div>
            <div className="numero-conex">
                <h3>75 conexões</h3>
            </div>
        </div>
        <div className="info3">
            <div className="titulo">
                <h1>Camilla - Designer</h1>
            </div>
            <div className="biografia">
                <p>"Devoradora de livros em busca de novos mundos! 📚✨ Explorando páginas repletas de emoções e conhecimento. Apaixonada pelas histórias que me transportam para universos fascinantes. Encontro refúgio nas palavras e me perco nas entrelinhas. Compartilhando minhas leituras favoritas e recomendando tesouros literários. Acredito que os livros têm o poder de transformar vidas e expandir horizontes! 🌟❤️ #AmanteDeLeitura #Bookworm #Livros"</p>
            </div>
        </div>
        <div className="destaques">
            <div>
                <img src={Destaque1} alt=""/>
                <p>Portifólio 1</p>
            </div>
            <div>
                <img src={Destaque2} alt=""/>
                <p>Portifólio 2</p>
            </div>
            <div>
                <img src={Destaque3} alt=""/>
                <p>Adicionar</p>
            </div>
        </div>
        <div className="nav-post">
            <div className="titulo-nav">
                <h3>publicações</h3>
            </div>
            <div className="titulo2-nav">
                <h3>marcações</h3>
            </div>
        </div>
        <div className="posts">
            <div className="imagem1-post">
                <img src={Imagem2} alt=""/>
            </div>
            <div className="imagem2-post">
                <img src={Imagem2} alt=""/>
            </div>
            <div className="imagem2-post">
                <img src={Imagem2} alt=""/>
            </div>
            <div className="imagem2-post">
                <img src={Imagem2} alt=""/>
            </div>
            <div className="imagem2-post">
                <img src={Imagem2} alt=""/>
            </div>
            <div className="imagem2-post">
                <img src={Imagem2} alt=""/>
            </div>
        </div>
    </div>
        </section>
    )
}