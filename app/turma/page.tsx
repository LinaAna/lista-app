import Card from "@/components/Card";
import CardAluno from "@/components/CardAluno";
import Header from "@/components/HeaderTurma";
import ListaMap from "@/components/ListaMap";
import Rodape from "@/components/Rodape";
import ListaGenerica from "@/components/ListaGenerica";
import TabelaAlunos from "@/components/TabelaAlunos";
import Contador from "@/components/Contador";

export default function Home() {
  const alunosTeste = [
    { id: 101, nome: 'Lina Ana', curso: 'Engenharia de Software' },
    { id: 102, nome: 'João Silva', curso: 'Ciência da Computação' },
    { id: 103, nome: 'Maria Santos', curso: 'Sistemas de Informação' },
  ];

  return (
    <main>
      <Header />
      
      <section>
        <h2>Mural da turma</h2>
        <Contador />
        <ListaMap />
      </section>

      <section>
        <h2>Lista Genérica</h2>
        <ListaGenerica titulo="Frontend" itens={["React", "Next.js", "TypeScript"]} />
      </section>

      <section>
        <h2>Tabela de Alunos</h2>
        <TabelaAlunos alunos={alunosTeste} />
      </section>

      <Rodape />
    </main>
  );
}