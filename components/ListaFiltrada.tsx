type Usuario = { id: number; nome: string; ativo: boolean }
type Props = {
  usuarios: Usuario[]
}

export default function ListaFiltrada({ usuarios }: Props) {
  
  const usuariosAtivos = usuarios.filter(usuario => usuario.ativo)
  
  return (
    <ul className="list-disc pl-5 space-y-1">
      {usuariosAtivos.map(u => (
        <li key={u.id}>{u.nome}</li>
      ))}
    </ul>
  )
}