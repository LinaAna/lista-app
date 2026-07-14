import CardAluno from "@/components/CardAluno";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";


export default function Home() {
  return (
    <div>
     <Titulo/>
     <div className="flex gap-6">
        <CardAluno/>
        <CardAluno/>
        <CardAluno/>
     </div>
     <div>
      <img src="" alt="" />
     </div>
     <div>
      <Rodape/>
      </div>
    </div>
  
  );
}
