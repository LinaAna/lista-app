type ContadorProps = {
    alunosMatriculados?: number;
}

export default function Contador({ alunosMatriculados }: ContadorProps){
    return(
        <span className="text-slate-600 dark:text-slate-300 font-medium">
        📚 {alunosMatriculados} alunos matriculados
      </span>
    );
}
