export default function CardAluno(){
    const nome = "Daniel Guimarães";
    const aluno ="Ana Carolina";
    const curso ="Front-end.";
    return(
        <div>    
        {`${ aluno } ${curso}`}
        <p>Nota final: {8 + 1}</p>
        {nome}
        <div className="bg-pink-700 rounded-2x1 p-6 shadow-lg text-yellow-100 font-bold ">Ana Carolina</div>
        </div >    
    );
}