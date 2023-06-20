'use client'

import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3000/produtos", {
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
            fetch("http://localhost:3000/produtos", {
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
        <div>

        
            <h1 className="product-title">{produto.titulo}tesye</h1>
            <p>{produto.data_cadastro}gvgv</p>
            <p>{produto.preco}kbbhjb</p>
            <p>{produto.descricao}vvgv</p>
            <p>{produto.imagem}hjb</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button><br/>
            <a href='/'>Voltar</a>

        </div>

    )
}