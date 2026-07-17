import Card from "@/components/Card";
import CardAluno from "@/components/CardAluno";
import Header from "@/components/HeaderTurma";
import Idade from "@/components/Idade";
import ListaMap from "@/components/ListaMap";
import Ola from "@/components/Ola";
import Rodape from "@/components/Rodape";
import Saudacao from "@/components/Saudacao";
import Status from "@/components/Status";
import Titulo from "@/components/Titulo";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <Titulo />
        
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <CardAluno />
          <CardAluno />
          <CardAluno />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-rose-500 pl-3">
            Turma 2026
          </h2>
        </div>

        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span>📌</span> Mural da turma
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <h5 className="bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 font-medium py-2 px-4 rounded-lg text-center border border-rose-100 dark:border-rose-800 transition-colors hover:bg-rose-100 dark:hover:bg-rose-900/50 cursor-default">
              Ana Carolina
            </h5>
            <h5 className="bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium py-2 px-4 rounded-lg text-center border border-pink-100 dark:border-pink-800 transition-colors hover:bg-pink-100 dark:hover:bg-pink-900/50 cursor-default">
              Manoela
            </h5>
            <h5 className="bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 font-medium py-2 px-4 rounded-lg text-center border border-fuchsia-100 dark:border-fuchsia-800 transition-colors hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/50 cursor-default">
              Pedro
            </h5>
            <h5 className="bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium py-2 px-4 rounded-lg text-center border border-violet-100 dark:border-violet-800 transition-colors hover:bg-violet-100 dark:hover:bg-violet-900/50 cursor-default">
              Elisa
            </h5>
          </div>
        </div>

        {/* Seção de Componentes Demonstrativos */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-pink-500 pl-3">
            Componentes
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-4">
            <Idade anos={20}/> 
            <Status ativo/>
            <Card nome="Goebel" cargo="Mecânico Industrial"/>
            <Saudacao nome="Goebel"></Saudacao>
            <ListaMap/>
            <Ola visitante="Ana"/>
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <Rodape />
      </div>
    </div>
  );
}