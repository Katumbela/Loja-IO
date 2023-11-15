import React, { useState } from "react";
import MetodoObtencao from "./obtencao";
import MetodoPagamento from "./metodoPagamento";
import InformacoesEntrega from "./info";
import ResumoCompra from "./resumo";

const Finalizar = ({ cart, searchbtn, favoritos, addcarrinho, ver, favs, setFavoritos }) => {
  const [step, setStep] = useState(1);
  const [metodoObtencao, setMetodoObtencao] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [informacoesEntrega, setInformacoesEntrega] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const finalizarCompra = () => {
    // Implemente a lógica para salvar as informações no banco de dados
    console.log("Informações a serem salvas:", { metodoObtencao, metodoPagamento, informacoesEntrega });

    // Redirecionar ou realizar outras ações após a conclusão da compra
  };

  return (
    <>
      {/* Barra de progresso */}
      <div>
        <div style={{ width: `${(step / 4) * 100}%` }}></div>
      </div>

      {step === 1 && <MetodoObtencao nextStep={nextStep} metodoObtencao={metodoPagamento} setMetodoObtencao={setMetodoObtencao} />}
      {step === 2 && <MetodoPagamento prevStep={prevStep} nextStep={nextStep} setMetodoPagamento={setMetodoPagamento} />}
      {step === 3 && (
        <InformacoesEntrega
          prevStep={prevStep}
          setInformacoesEntrega={setInformacoesEntrega}
          nextStep={nextStep} // Certifique-se de passar a função nextStep para InformacoesEntrega
        />
      )}
      {step === 4 && (
        <ResumoCompra

          cart={cart}
          metodoObtencao={metodoObtencao}
          metodoPagamento={metodoPagamento}
          informacoesEntrega={informacoesEntrega}
          finalizarCompra={finalizarCompra}
        />
      )}
    </>
  );
};

export default Finalizar;
