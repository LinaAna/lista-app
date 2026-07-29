type Props = {
  visitante?: string;
}

export default function Ola({ visitante = "visitante" }: Props) {
  return <h2> Olá, {visitante}!</h2>;
}

