type ListaMapProps = {
  nomes: string[];
};

export default function ListaMap() {
  const nomes: string[] = ["Ana", "Manuella", "Pedro"];
  
  return (
    <ul>
      {nomes.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}