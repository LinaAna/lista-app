type Item = { id: number; nome: string; vip: boolean }

type Props = {
  itens: Item[]
}

export default function GradeCards({ itens }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {itens.map(item => (
        <div key={item.id} className="p-4 border rounded-lg shadow-sm w-48 bg-white">
          <p className="font-bold">{item.nome}</p>
          {item.vip && <span className="text-yellow-600 text-sm font-semibold">🌟 VIP</span>}
        </div>
      ))}
    </div>
  )
}