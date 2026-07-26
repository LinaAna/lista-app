type Produto = { id: number; nome: string; preco: number }
type Props = {
  produtos: Produto[]
}

export default function ListaProdutos({ produtos }: Props) {
  const formatarMoeda = (valor: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)

  return (
    <ul className="space-y-2">
      {produtos.map(p => (
        <li key={p.id} className="flex justify-between border-b pb-1">
          <span>{p.nome}</span>
          <span className="font-bold text-green-700">{formatarMoeda(p.preco)}</span>
        </li>
      ))}
    </ul>
  )
}