"use client"
import './globals.css'


export default async function Home() {

  const req = await fetch("http://localhost:3005/produtos", {
    cache: "no-cache"
  });
 

  return (
    <main> 
      
    <ul>
   
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

      
    </main>
  )
}