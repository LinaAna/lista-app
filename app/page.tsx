import CartaoPerfil from "@/components/CartaoPerfil";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";


export default function Home() {
  return (
    <div>
     <Titulo/>
     <Rodape/>
     <div className="flex">
        <CartaoPerfil/>
        <CartaoPerfil/>
        <CartaoPerfil/>
     </div>
    </div>
  
  );
}
