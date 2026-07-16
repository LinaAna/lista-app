import Header from "@/components/HeaderTurma";
import SecaoTurma from "@/components/SecaoTurma";
import Rodape from "@/components/Rodape";



export default function Turma() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex grow">
        <SecaoTurma />
      </main>
     
      <Rodape />
    </div>
  );
}