type Aluno = { id: number; nome: string; curso: string }

type Props = {
  alunos: Aluno[]
}

export default function TabelaAlunos({ alunos }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Nome</th>
          <th className="border border-gray-300 p-2">Curso</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map(aluno => (
          <tr key={aluno.id} className="text-center hover:bg-gray-50">
            <td className="border border-gray-300 p-2">{aluno.id}</td>
            <td className="border border-gray-300 p-2">{aluno.nome}</td>
            <td className="border border-gray-300 p-2">{aluno.curso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}