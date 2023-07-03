import { ChatStyled,
        ChatDivStyled 
} from "./style";


import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";
import ComponenteChat from "../../components/ComponenteChat/ComponenteChat";

import Foto1 from "../../assets/img/Notificacoes/harry.jpeg";

export default function Chat () {
    return (
        <ChatStyled>
            <Sidebar tipoItem3="abaEscolhida"
                itemSidebar1={<ItemSidebar nomeItem="Meu Perfil" icon="fa-solid fa-user" />}
                itemSidebar2={<ItemSidebar nomeItem="Feed" icon="fa-solid fa-home" />}
                itemSidebar3={<ItemSidebar nomeItem="Chat" icon="fa-solid fa-solid fa-comment" />}
                itemSidebar4={<ItemSidebar nomeItem="Notificações" icon="fa-solid fa-bell" />   }
                itemSidebar5={<ItemSidebar nomeItem="Meu Projeto" icon="fa-solid fa-lightbulb" />}
            />

            <ChatDivStyled>
                <ComponenteChat imagem={Foto1} nome="José" mensagem="Olá, vi aqui que você..." />
            </ChatDivStyled>
        </ChatStyled>
    )
}