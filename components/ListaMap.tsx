export default function ListaMap() {
    const nomes: string[] = ["Ana", "Bruno", "Carlos"];
    return (
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    );
  }