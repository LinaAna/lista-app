type SaudacaoProps = {
    nome: string;
}

export default function Saudacao(props:{nome: string}){    
    return <h1 className="">Olá, {props.nome} </h1>
    
}