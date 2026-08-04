type CardAlunoProps = {
  nome: string;
  cargo: string;
  nota?: number;
  presenca: boolean;
  periodo: string;
  ativo: boolean;
  vip: boolean;
  habilidades: string[];
}

export default function CardAluno({ nome, cargo, periodo, ativo, vip, habilidades, presenca, nota }: CardAlunoProps) {
  return (
    <div>
      <h3>{nome}</h3>
      {vip && <span>VIP</span>}
      <p>{cargo}</p>
      <p>Período: {periodo}</p>
      <p>Status: {ativo ? 'Ativo' : 'Inativo'}</p>
      <p>Presença: {presenca ? '🟢Presente ' : '⚪Ausente'}</p>
      <p>Nota: {nota || 0}</p>   
      <p>Habilidades:</p>
      <ul>
        {habilidades.map((hab) => (
          <li key={hab}>{hab}</li>
        ))}
      </ul>
    </div>
  );
}