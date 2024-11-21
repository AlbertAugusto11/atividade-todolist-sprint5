import { FruitForm } from "../../components/FruitForm";
import { FruitList } from "../../components/FruitList";

export const HomePage = () => {

   return (
      <main>
         <h1>Esta é uma Lista de Frutas</h1>
         <FruitForm />
         <FruitList />
         <p>Coloque o nome da fruta e o valor e clique em Cadastrar</p>
      </main>
   );
};
