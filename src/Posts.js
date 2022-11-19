export default function Posts(){
    const posts = [
        {perfil: "assets/img/meowed.svg", usuario: "meowed", imagem: "assets/img/gato-telefone.svg", smallimg: "assets/img/respondeai.svg", amigo: "respondeai", curtidas: "outras 101.523 pessoas"},
        {perfil: "assets/img/barked.svg", usuario: "barked", imagem: "assets/img/dog.svg", smallimg: "assets/img/adorable_animals.svg", amigo: "adorable_animals", curtidas: "outras 99.159 pessoas"}
    ]
    return (
        <div class="posts">
            {posts.map((post) => <Post perfil={post.perfil} usuario={post.usuario} imagem={post.imagem} smallimg={post.smallimg} amigo={post.amigo} curtidas={post.curtidas}/>)}
        </div>
    )
}

function Post(props){
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
                <img data-test="post-image" src={props.imagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            
                <div class="curtidas">
                    <img src={props.smallimg} />
                    <div class="texto">
                        Curtido por <strong>{props.amigo}</strong> e <strong data-test="likes-number">{props.curtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}