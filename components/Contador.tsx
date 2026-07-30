'use client';

import { use, useState } from "react";

type ContadorProps = {
    alunosMatriculados?: number;
}

export default function Contador({ alunosMatriculados }: ContadorProps){
    const [n, setN] = useState<number>(0);
    return(
        <>
            <span className="text-slate-600 dark:text-slate-300 font-medium">
            📚 {alunosMatriculados} alunos matriculados
            </span>
            <div className="text-center">
                <p className="text-3xl font-bold mb-3">{n}</p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
                    onClick={() => setN(n + 1)}>+1
                </button>
            </div>
            <div className="text-center">
                
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
                    onClick={() => setN(n - 1)}>-1
                </button>
            </div>
            <div className="text-center">
                <p className="text-xl text-slate-600 mb-3">{n % 2 === 0 ? "par" : "ímpar"}</p>
            </div>
        </>
    );
}
