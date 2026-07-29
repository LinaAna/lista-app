type Props = {
  titulo: string;
  itens: string[];
}

export default function ListaGenerica({ titulo, itens }: Props) {
  return (
    <div>
      <h3>{titulo}</h3>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}