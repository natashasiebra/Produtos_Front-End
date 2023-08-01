'use client'

import { useRouter } from "next/navigation";
import './produtocss.css'


export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3005/produtos/", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })

    const produto = await req.json();
    console.log(idJson)
    

    const remover = () => {
        console.log(idJson)
        try {
            alert('Tem certeza que deseja realmente remover ?')
            fetch("http://localhost:3005/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }



    return (
        <div className="produto">
           
        
            <h1 className="produto-title">{produto.titulo}</h1>
            <p className="produto-date">{produto.data_cadastro}</p>
            
            <p className="produto-description">{produto.descricao}</p>
            <p className="produto-price">{produto.preco}</p>
            <div className="produto-btn-container">
            <button className="produto-btn-red" onClick={e => e.preventDefault(remover())}>REMOVER</button>
            <a href='/'><button className="produto-btn">Voltar</button></a>
            </div>

        </div>

    )
}