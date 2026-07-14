export default function Header(){
    return(
        <header className="bg-pink-200 rounded-2x1 p-6 shadow-lg text-yellow-100 font-bold">
        <b>Turma Front-end</b>
        <nav className="flex gap-4">
          <a href="/">Início</a>
          <a href="/turma">Turma</a>
        </nav>
      </header>
    );

}