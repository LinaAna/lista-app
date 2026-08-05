type StatusProps = {
    ativo: boolean;
  };


export default function Status({ ativo }: {ativo: boolean}) {
    return <p>{ativo ? "ativo" : "inativo"}</p>;
  }
 