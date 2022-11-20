import React, {useState} from "react";

export default function Posts(){
    const posts = [
        {
        perfil: "assets/img/meowed.svg", 
        usuario: "meowed", 
        imagem: "assets/img/gato-telefone.svg", 
        smallimg: "assets/img/respondeai.svg", 
        amigo: "respondeai", 
        curtidas: 101523
    },

        {perfil: "assets/img/barked.svg", 
        usuario: "barked", 
        imagem: "assets/img/dog.svg", 
        smallimg: "assets/img/adorable_animals.svg", 
        amigo: "adorable_animals", 
        curtidas: 99159
    }
    ]
    
    return (
        <div class="posts">
            {posts.map((post) => <Post perfil={post.perfil} usuario={post.usuario} imagem={post.imagem} smallimg={post.smallimg} amigo={post.amigo} curtidas={post.curtidas}/>)}
        </div>
    )
}

function Post(props){
    const [bookmarkClicked, setbookmarkClicked] = useState("bookmark-outline")
    const [heartClicked, setheartClicked] = useState("heart-outline")
    const [totalLikes, settotalLikes] = useState(Number(props.curtidas))

    function savePost(){
        if (bookmarkClicked == "bookmark-outline"){
            setbookmarkClicked("bookmark-sharp")
        } else if (bookmarkClicked == "bookmark-sharp") {
            setbookmarkClicked("bookmark-outline")
        }
    }

    function likePost(){
        if (heartClicked == "heart-outline"){
            setheartClicked("heart")
            settotalLikes(props.curtidas + 1)
        } else if (heartClicked == "heart") {
            setheartClicked("heart-outline")
            settotalLikes(totalLikes - 1)
        }
    }

    function likeImg(){
        if (heartClicked == "heart-outline"){
            setheartClicked("heart")
            settotalLikes(props.curtidas + 1)
        }
    }

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.perfil} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={likeImg} src={props.imagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likePost} name={heartClicked}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={savePost} name={bookmarkClicked}></ion-icon>
                    </div>
                </div>
            
                <div class="curtidas">
                    <img src={props.smallimg} />
                    <div class="texto">
                        Curtido por <strong>{props.amigo}</strong> e <strong data-test="likes-number">outras {totalLikes.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}