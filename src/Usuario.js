import React, {useState} from "react";

export default function Usuario(){
    const imagemPadrao = "assets/img/catanacomics.svg"
    const usuarioPadrao = "Catana"
    const [usuario, setUsuario] = useState(usuarioPadrao);
    const [imagem, setImagem] = useState(imagemPadrao)

    function mudarNome() {
        setUsuario(prompt('Qual o seu nome?'))
    }

    function mudarImagem() {
        const imagemAdicionada = prompt('Insira o link da sua imagem')
        setImagem(imagemAdicionada)
    }

    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={mudarImagem} src={!imagem ? imagemPadrao : imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {!usuario ? usuarioPadrao : usuario}
                    <ion-icon data-test="edit-name" onClick={mudarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}