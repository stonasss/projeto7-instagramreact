export default function Sugestoes() {
    const sugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ]

    /*renderização de layout das sugestões do site*/
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao key={sugestao.imagem} imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.nome} />)}
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}