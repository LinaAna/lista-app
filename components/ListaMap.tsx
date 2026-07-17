export default function ListaMap() {
    const nomes: string[] = ["Ana", "Manuella", "Pedro"];
    return (
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    );
  }