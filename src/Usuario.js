import React, { useState } from "react";

export default function Usuario() {

    const userData = [
        {
            usuario: "catanacomics",
            nome: "Catana",
            imagem: "assets/img/catanacomics.svg"
        }
    ]

    return (
        <div className="usuario">
            {userData.map((user) => <User key={user.usuario} usuario={user.usuario} nome={user.nome} imagem={user.imagem} />)}
        </div>
    )

    function User(props) {
        const [nome, setNome] = useState(props.nome);
        const [imagem, setImagem] = useState(props.imagem)

        /*renderização de layout da informação do usuário*/
        return (
            <div data-test="user" className="usuario">
                <img data-test="profile-image" onClick={mudarImagem} src={!imagem ? props.imagem : imagem} />
                <div className="texto">
                    <strong>{props.usuario}</strong>
                    <span data-test="name">
                        {!nome ? props.nome : nome}
                        <ion-icon data-test="edit-name" onClick={mudarNome} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        )

        /*função para mudar o nome pelo ícone do lápis*/
        function mudarNome() {
            setNome(prompt('Qual o seu nome?'))
        }

        /*função para mudar o nome do usuário logado*/
        function mudarImagem() {
            const imagemAdicionada = prompt('Insira o link da sua imagem')
            setImagem(imagemAdicionada)
        }
    }

}