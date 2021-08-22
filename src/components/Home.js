import React from "react";
import '../App.css'

export default function Home() {
  return (
    <main>
      <div className="home-background">
        <section className="relative flex min-h-screen pt-12 lg:pt-24 px-12">
          <h1 className="opacity-100 justify-center text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
            Welcome to The Coding<br/>Netowork's official website
          </h1>   
          <h2 className="text-xl">Hello, this is The-Coding-Networks official website, this website is a little bare <br/>but we hope
            to add alot more things to it in the furture</h2>       
        </section>
      </div>
    </main>
  );
}
