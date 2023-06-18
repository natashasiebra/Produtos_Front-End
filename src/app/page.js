"use client"
import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3000/produtos", {
    cache: "no-cache"
  });
  const produto = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produto.map(produto => (
        <div key={produto.id}>
           <p>{produto.titulo}</p>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          <img src={produto.imagem} width='15%'/><br/>
          <Link className='imagem' href={`/produtos/${produto.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}