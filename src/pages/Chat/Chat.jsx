import {
    ChatStyled,
    ChatDivStyled,
    ChatConversaStyled,
    SeguraSessoes,
    ConversaStyled
} from "./style";


import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";
import ComponenteChat from "../../components/ComponenteChat/ComponenteChat";

import Foto1 from "../../assets/img/Notificacoes/harry.jpeg";
import Foto2 from "../../assets/img/Notificacoes/dany.jpeg";
import Foto3 from "../../assets/img/Notificacoes/elliewilliams.jpeg";
import Foto4 from "../../assets/img/Notificacoes/jacaerysstrong.jpeg";


export default function Chat() {
    return (
        <ChatStyled>
            <div>
            <Sidebar tipoItem3="abaEscolhida"
                itemSidebar1={<ItemSidebar nomeItem="Meu Perfil" icon="fa-solid fa-user" />}
                itemSidebar2={<ItemSidebar nomeItem="Feed" icon="fa-solid fa-home" />}
                itemSidebar3={<ItemSidebar nomeItem="Chat" icon="fa-solid fa-solid fa-comment" />}
                itemSidebar4={<ItemSidebar nomeItem="Notificações" icon="fa-solid fa-bell" />}
                itemSidebar5={<ItemSidebar nomeItem="Meu Projeto" icon="fa-solid fa-lightbulb" />}
            />
            </div>

        <SeguraSessoes>
            <div>
            <ChatDivStyled>
                <ComponenteChat imagem={Foto1} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="Alice" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="Gabi" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="Enzo" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto1} nome="Ronaldo" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="Stephany" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="Tamirez" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="Raquel" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto1} nome="Guilherme" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="Leonardo" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="Matheus" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="Arthur" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto1} nome="Isaque" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="Amanda" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto1} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto1} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto2} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto3} nome="José" mensagem="Olá, vi aqui que você..." />
                <ComponenteChat imagem={Foto4} nome="José" mensagem="Olá, vi aqui que você..." />
            </ChatDivStyled>
            </div>

            <div className="chat">
            <ChatConversaStyled>
                    <div className="perfilChat">
                        <div className="seguraFoto">
                        <img src={Foto2} />
                        <div className="seguraTexto">
                            <div className="areaTextoPerfil">
                                <h2>Stephany</h2>
                                <p>Estrategista de Marketing</p>
                            </div>
                            </div>
                            </div>

                            <div className="opcoesPerfil">
                                <i class="fa-solid fa-phone-volume"></i>
                                <i class="fa-solid fa-video"></i>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        
                    </div>

                    <ConversaStyled>
                        <div className="mensagem1 mensagem">
                            <img src= {Foto2} />
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem corporis nobis dignissimos deserunt! Saepe fugiat aut voluptatibus iusto illum porro consectetur, minus, voluptates quisquam sint fuga impedit sit eos!</p>
                            </div>
                        </div>

                        <div className="mensagem2 mensagem">
                            <div className="texto2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem corporis nobis dignissimos deserunt! Saepe fugiat aut voluptatibus iusto illum porro consectetur, minus, voluptates quisquam sint fuga impedit sit eos!</p>
                            </div>
                            <img src= {Foto1} />
                        </div>

                        <div className="mensagem1 mensagem">
                            <img src= {Foto2} />
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem corporis nobis dignissimos deserunt! Saepe fugiat aut voluptatibus iusto illum porro consectetur, minus, voluptates quisquam sint fuga impedit sit eos!</p>
                            </div>
                        </div>

                        <div className="mensagem2 mensagem">
                            <div className="texto2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem corporis nobis dignissimos deserunt! Saepe fugiat aut voluptatibus iusto illum porro consectetur, minus, voluptates quisquam sint fuga impedit sit eos!</p>
                            </div>
                            <img src= {Foto1} />
                        </div>

                        <div className="divDigitarTexto">
                            <input type="text" placeholder="Digitar..."/>
                            <label htmlFor="file"><i class="fa-solid fa-link"></i></label>
                            <input type="file" id="file" className="file"/>
                                <button>Enviar <span><i class="fa-solid fa-paper-plane-top"></i></span></button>

                        </div>
                    </ConversaStyled>
            </ChatConversaStyled>
            </div>
            </SeguraSessoes>
        </ChatStyled>
    )
}