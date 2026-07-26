type Props = {
  titulo: string;
  itens: string[];
}

export default function ListaGenerica({ titulo, itens }: Props) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-bold text-lg mb-2">{titulo}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}