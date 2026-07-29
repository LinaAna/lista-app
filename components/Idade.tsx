type IdadeProps = {
    anos: number;
}
export default function Idade({anos}: IdadeProps) {
    return <p>Tenho {anos} anos</p>;
}