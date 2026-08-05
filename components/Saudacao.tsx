type SaudacaoProps = {
    nome: string;
}

export default function Saudacao(props:{nome: string}){    
    return 
    <button
    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
    onClick={() => alert("Olá, turma!")}>
    Saudar
  </button>

}
    