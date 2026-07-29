interface Props {
    cargo: string;
  } 

export default function Perfil( {cargo}: Props) { 
    return <p>Seu cargo é {cargo}</p>
}
