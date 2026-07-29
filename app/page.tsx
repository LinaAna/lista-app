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
import MensagemVip from "@/components/MensagemVip";
import StatusUsuario from "@/components/StatusUsuario";
import ListaFiltrada from "@/components/ListaFiltrada";
import ListaProdutos from "@/components/ListaProdutos";
import Badge from "@/components/Badge";
import ListaGenerica from "@/components/ListaGenerica";
import GradeCards from "@/components/GradeCards";
import TabelaAlunos from "@/components/TabelaAlunos";

export default function Home() {
  const usuariosTeste = [
    { id: 1, nome: 'Ana', ativo: true },
    { id: 2, nome: 'Carlos', ativo: false },
    { id: 3, nome: 'Beatriz', ativo: true },
  ]

  const produtosTeste = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.50 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 89.90 },
    { id: 3, nome: 'Monitor 24"', preco: 899.99 },
  ]

  const alunosTeste = [
    { id: 101, nome: 'Lina Ana', curso: 'Engenharia de Software' },
    { id: 102, nome: 'João Silva', curso: 'Ciência da Computação' },
    { id: 103, nome: 'Maria Santos', curso: 'Sistemas de Informação' },
  ]

  const cardsTeste = [
    { id: 1, nome: 'Plano Básico', vip: false },
    { id: 2, nome: 'Plano Premium', vip: true },
    { id: 3, nome: 'Plano Enterprise', vip: true },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <Titulo />
        
        {/* Mural da Turma */}
        <section className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span></span> Mural da turma
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Ana Carolina', 'Manuella', 'Pedro', 'Elisa'].map((nome, index) => (
              <div 
                key={nome}
                className={`py-2 px-4 rounded-lg text-center font-medium border transition-colors cursor-default
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

        {/* Cards de Alunos */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-rose-500 pl-3">
            Cards de Alunos
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <CardAluno nome="Ana Carolina" cargo="Front-end Jr" periodo="Noturno" ativo={true} vip={true} habilidades={['React', 'Tailwind']} />
            <CardAluno nome="Manoela" cargo="Designer UX" periodo="Matutino" ativo={true} vip={false} habilidades={['Figma', 'Photoshop']} />
            <CardAluno nome="Pedro" cargo="Back-end" periodo="Vespertino" ativo={false} vip={false} habilidades={['Node.js']} />
          </div>
        </section>

        {/* Componentes Básicos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-pink-500 pl-3">
            Componentes Básicos
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Idade anos={20}/> 
              <Status ativo/>
              <Card nome="Goebel" cargo="Mecânico Industrial"/>
              <Saudacao nome="Goebel"/>
              <ListaMap/>
              <Ola visitante="Ana"/>
            </div>
          </div>
        </section>

        {/* Renderização Condicional */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-fuchsia-500 pl-3">
            Renderização Condicional
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <MensagemVip nome="Lina" isVIP={true} />
              <MensagemVip nome="Visitante" isVIP={false} />
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">Status:</p>
              <div className="flex gap-4">
                <StatusUsuario isOnline={true} />
                <StatusUsuario isOnline={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Filter, Map e Formatação */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-violet-500 pl-3">
            Filter, Map e Formatação
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Usuários Ativos</h3>
              <ListaFiltrada usuarios={usuariosTeste} />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Produtos</h3>
              <ListaProdutos produtos={produtosTeste} />
            </div>
          </div>
        </section>

        {/* Componentes Reutilizáveis */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-rose-500 pl-3">
            Componentes Reutilizáveis
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Badges</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge texto="Aprovado" cor="verde" />
                <Badge texto="Pendente" cor="vermelho" />
                <Badge texto="Novo" cor="azul" />
                <Badge texto="Rascunho" cor="cinza" />
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <ListaGenerica 
                titulo="Tarefas do Dia" 
                itens={['Estudar React', 'Fazer commit', 'Revisar PR', 'Deploy']} 
              />
            </div>
          </div>
        </section>

        {/* Layouts e Tabelas */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-pink-500 pl-3">
            Layouts e Tabelas
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Grade de Cards</h3>
              <GradeCards itens={cardsTeste} />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Tabela de Alunos</h3>
              <div className="overflow-x-auto">
                <TabelaAlunos alunos={alunosTeste} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-auto">
        <Rodape />
      </div>
    </div>
  );
}