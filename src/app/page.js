"use client"
import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3000/produtos", {
    cache: "no-cache"
  });
  const produto = await req.json();

  return (
    <main> 
      
    <ul>
    <img className='topo' src='https://cdn-icons-png.flaticon.com/512/5087/5087408.png' width='5.5%'/>
  <li><a href="/cadastro">Adicionar jogos +</a></li>
  <li><a href="#news">Sobre o site</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Jogos</a>
    <div class="dropdown-content">
      <a href="#">Aventura</a>
      <a href="#">Corrida</a>
      <a href="#">Terror</a>
      <a>Exploração</a>
      <a>Exploração Online</a>
      <a>Guerra</a>
      <a>Simulação</a>
      <a>Sobrevivencia</a>
    </div>
  </li>
</ul><br/><br/>

      {produto.map(produto => (
        <div className='container'>


          <div key={produto.id} className='container-main' >
            <img className='image' src={produto.imagem} width='300px' height='300px'/><br/><br/>
            <label id='title'>{produto.titulo}  </label><br/><br/>
            <label id='title-2'>{produto.descricao}</label><br/><br/>
            <Link className='imagem' href={`/produtos/${produto.id}`}>ver mais</Link><br/>
            </div>


        </div>
        
      ) )
      }
      
    </main>
  )
}