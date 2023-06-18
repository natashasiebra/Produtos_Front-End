"use client"
import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3000/produtos", {
    cache: "no-cache"
  });
  const produto = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> Adicionar Jogos + </Link>
    <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

      {produto.map(produto => (
        <div key={produto.id} className='container'>
          <img src={produto.imagem} width='60%'/><br/>
          <p>{produto.titulo} </p>
          <p>{produto.descricao}</p>
          <Link className='imagem' href={`/produtos/${produto.id}`}>ver mais</Link><br/>
        </div>
        
      ) )
      }
      
    </main>
  )
}