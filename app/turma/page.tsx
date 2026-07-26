import Header from "@/components/HeaderTurma";
import SecaoTurma from "@/components/SecaoTurma";
import Rodape from "@/components/Rodape";
import CardAluno from "@/components/CardAluno";
import MensagemVip from "@/components/MensagemVip";
import StatusUsuario from "@/components/StatusUsuario";
import ListaFiltrada from "@/components/ListaFiltrada";
import ListaProdutos from "@/components/ListaProdutos";
import Badge from "@/components/Badge";
import ListaGenerica from "@/components/ListaGenerica";
import GradeCards from "@/components/GradeCards";
import TabelaAlunos from "@/components/TabelaAlunos";

export default function Turma() {
  const alunos = [
    { id: 1, nome: 'Ana Carolina', cargo: 'Front-end Jr', periodo: 'Noturno', ativo: true, vip: true, habilidades: ['React', 'Tailwind'] },
    { id: 2, nome: 'Manoela', cargo: 'Designer UX', periodo: 'Matutino', ativo: true, vip: false, habilidades: ['Figma', 'Photoshop'] },
    { id: 3, nome: 'Pedro', cargo: 'Back-end', periodo: 'Vespertino', ativo: false, vip: false, habilidades: ['Node.js', 'PostgreSQL'] },
    { id: 4, nome: 'Elisa', cargo: 'Full-stack', periodo: 'Noturno', ativo: true, vip: true, habilidades: ['React', 'Node.js', 'MongoDB'] },
  ]

  const materiais = [
    { id: 1, nome: 'Apostila React', preco: 45.90 },
    { id: 2, nome: 'Curso TypeScript', preco: 129.00 },
    { id: 3, nome: 'Pack de Ícones', preco: 19.90 },
  ]

  const planos = [
    { id: 1, nome: 'Básico', vip: false },
    { id: 2, nome: 'Premium', vip: true },
    { id: 3, nome: 'Mentoria', vip: true },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Título Principal */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Turma Front-end 2026
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Programador Front-End na Firjan SENAI
          </p>
        </div>

        {/* Mural da Turma */}
        <section className="mb-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span>📌</span> Mural da turma
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Ana Carolina', 'Manoela', 'Pedro', 'Elisa'].map((nome, index) => (
              <div 
                key={nome}
                className={`py-2 px-4 rounded-lg text-center font-medium border transition-colors
                  ${index === 0 ? 'bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-800' : 
                    index === 1 ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-800' :
                    index === 2 ? 'bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-100 dark:border-fuchsia-800' :
                    'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-800'
                  }`}
              >
                {nome}
              </div>
            ))}
          </div>
        </section>

        {/* Cards dos Alunos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-rose-500 pl-3">
            Nossa Turma
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alunos.map(aluno => (
              <CardAluno
                key={aluno.id}
                nome={aluno.nome}
                cargo={aluno.cargo}
                periodo={aluno.periodo}
                ativo={aluno.ativo}
                vip={aluno.vip}
                habilidades={aluno.habilidades}
              />
            ))}
          </div>
        </section>

        {/* Status e Acessos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-fuchsia-500 pl-3">
            Status e Acessos
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {alunos.slice(0, 2).map(aluno => (
                <MensagemVip 
                  key={aluno.id} 
                  nome={aluno.nome} 
                  isVIP={aluno.vip} 
                />
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-3">Presença:</p>
              <div className="space-y-2">
                {alunos.map(aluno => (
                  <div key={aluno.id} className="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 px-4 py-2 rounded-lg">
                    <span className="text-slate-700 dark:text-slate-300">{aluno.nome}</span>
                    <StatusUsuario isOnline={aluno.ativo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materiais e Entregas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-violet-500 pl-3">
            Materiais e Entregas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Materiais da Turma</h3>
              <ListaProdutos produtos={materiais} />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Próximas Entregas</h3>
              <ListaGenerica 
                titulo="" 
                itens={['Lista 7 - Props & Listas', 'Projeto Final', 'Apresentação da Turma']} 
              />
            </div>
          </div>
        </section>

        {/* Badges e Planos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-pink-500 pl-3">
            Badges e Planos
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Badges da Turma</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge texto="React" cor="azul" />
                <Badge texto="TypeScript" cor="azul" />
                <Badge texto="Aprovado" cor="verde" />
                <Badge texto="Entrega Pendente" cor="vermelho" />
                <Badge texto="Novato" cor="cinza" />
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Planos de Estudo</h3>
              <GradeCards itens={planos} />
            </div>
          </div>
        </section>

        {/* Tabela de Matrícula */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-rose-500 pl-3">
            Matrícula da Turma
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 overflow-x-auto">
            <TabelaAlunos alunos={alunos} />
          </div>
        </section>

      </main>

      <Rodape />
    </div>
  );
}