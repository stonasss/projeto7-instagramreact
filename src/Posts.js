import React, { useState } from "react";

export default function Posts() {
    const posts = [
        {
            perfil: "assets/img/meowed.svg",
            usuario: "meowed",
            imagem: "assets/img/gato-telefone.svg",
            smallimg: "assets/img/respondeai.svg",
            amigo: "respondeai",
            curtidas: 101523
        },

        {
            perfil: "assets/img/barked.svg",
            usuario: "barked",
            imagem: "assets/img/dog.svg",
            smallimg: "assets/img/adorable_animals.svg",
            amigo: "adorable_animals",
            curtidas: 99159
        }
    ]

    return (
        <div className="posts">
            {posts.map((post) => <Post key={post.perfil} perfil={post.perfil} usuario={post.usuario} imagem={post.imagem} smallimg={post.smallimg} amigo={post.amigo} curtidas={post.curtidas} />)}
        </div>
    )
}

function Post(props) {
    const [bookmarkClicked, setbookmarkClicked] = useState("bookmark-outline")
    const [heartClicked, setheartClicked] = useState("heart-outline")
    const [totalLikes, settotalLikes] = useState(Number(props.curtidas))

    function savePost() {
        if (bookmarkClicked == "bookmark-outline") {
            setbookmarkClicked("bookmark-sharp")
        } else if (bookmarkClicked == "bookmark-sharp") {
            setbookmarkClicked("bookmark-outline")
        }
    }

    /*função para curtir pelo ícone de coração*/
    function likePost() {
        if (heartClicked == "heart-outline") {
            setheartClicked("heart")
            settotalLikes(totalLikes + 1)
        } else if (heartClicked == "heart") {
            setheartClicked("heart-outline")
            settotalLikes(totalLikes - 1)
        }
    }

    /*função para curtir pela foto do post*/
    function likeImg() {
        if (heartClicked == "heart-outline") {
            setheartClicked("heart")
            settotalLikes(totalLikes + 1)
        }
    }

    /*renderização de layout dos posts do conteúdo*/
    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.perfil} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={likeImg} src={props.imagem} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likePost} name={heartClicked}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={savePost} name={bookmarkClicked}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.smallimg} />
                    <div className="texto">
                        Curtido por <strong>{props.amigo}</strong> e <strong data-test="likes-number">outras {totalLikes.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}