import "./Perfil.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";

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
            <h1>Perfil</h1>
        </section>
    )
}