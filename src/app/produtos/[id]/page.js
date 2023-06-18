'use client'


import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    

    const req = await fetch("http://localhost:3000/produtos/" + params.codigo, {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const res = await req.json();
    const produto = res[0]


    const remover = () => {
        const codigoJson = JSON.stringify({codigo: produto.codigo})
        
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
        <div >
         <p>{produto.titulo}</p>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          <img src={produto.imagem} width='15%'/><br/>
          <br/>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}