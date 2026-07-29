
import Header from "@/components/HeaderTurma";
import ListaMap from "@/components/ListaMap";
import Rodape from "@/components/Rodape";
import ListaGenerica from "@/components/ListaGenerica";
import TabelaAlunos from "@/components/TabelaAlunos";
import Contador from "@/components/Contador";
import Card from "@/components/Card";
import CardAluno from "@/components/CardAluno";

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
       
      </section>
      <section>
        <Card nome="Lina Ana" cargo="Engenheira de Software" />
        <CardAluno nome="Lina Ana" cargo="Engenheira de Software" periodo="2024.1" ativo={true} vip={true} habilidades={["React", "Next.js", "TypeScript"]} presenca ={true}/>
      </section>
      <section>
        <h2>Mural da turma</h2>
        <Contador alunosMatriculados={11}/>        
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