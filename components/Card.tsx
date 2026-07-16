export default function Card({nome, cargo}: {nome: string; cargo: string}){
    return(
        <div>
    <h3>{nome}</h3>
    <p> {cargo} </p>
    </div>

    );
}
