type Props = {
  texto: string;
  cor?: 'verde' | 'vermelho' | 'azul' | 'cinza';
}

export default function Badge({ texto, cor = 'cinza' }: Props) {
  const estilos = {
    verde: 'bg-green-100 text-green-800',
    vermelho: 'bg-red-100 text-red-800',
    azul: 'bg-blue-100 text-blue-800',
    cinza: 'bg-gray-100 text-gray-800',
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${estilos[cor]}`}>
      {texto}
    </span>
  )
}