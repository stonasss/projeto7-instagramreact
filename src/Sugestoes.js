export default function Sugestoes(){
    const sugestoes = [
        {imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
        {imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"},
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.nome}/>)}
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem}/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}