type Props = {
  nome: string;
  isVIP: boolean;
}

export default function MensagemVip({ nome, isVIP }: Props) {
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <p>Olá, {nome}!</p>
      {isVIP && <p className="text-yellow-600 font-bold mt-2">🌟 Você tem acesso VIP!</p>}
    </div>
  )
}