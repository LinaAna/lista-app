interface CardAlunoProps {
    nome: string;
    cargo: string;
    periodo: string;
    ativo: boolean;
    vip: boolean;
    habilidades: string[];
  }
  
  export default function CardAluno({ nome, cargo, periodo, ativo, vip, habilidades }: CardAlunoProps) {
    return (
      <div className="bg-pink-700 rounded-2xl p-6 shadow-lg text-yellow-100 font-bold w-64">
        
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl">{nome}</h3>
          {vip && (
            <span className="bg-yellow-400 text-pink-900 text-xs px-2 py-1 rounded font-bold">
              VIP
            </span>
          )}
        </div>
        <p className="text-pink-200 font-normal">{cargo}</p>
        <p className="text-pink-200 text-sm font-normal">Período: {periodo}</p>
        <p className={`text-sm mt-2 font-normal ${ativo ? 'text-green-300' : 'text-red-300'}`}>
          Status: {ativo ? 'Ativo' : 'Inativo'}
        </p>
        <div className="mt-4">
          <p className="text-xs text-pink-200 mb-1 font-normal">Habilidades:</p>
          <div className="flex flex-wrap gap-1">
            {habilidades.map((hab, index) => (
              <span key={index} className="bg-pink-800 text-pink-100 text-xs px-2 py-1 rounded">
                {hab}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
 