import React from "react";
import { db } from "./config";

const ResumoCompra = ({ metodoObtencao, metodoPagamento, informacoesEntrega, finalizarCompra }) => {
  
    // Exemplo de como salvar dados no Firestore
const salvarDadosFirestore = (metodoObtencao, metodoPagamento, informacoesEntrega) => {
    db.collection("compras").add({
      metodoObtencao,
      metodoPagamento,
      informacoesEntrega,
      dataCompra: new Date(),
    })
    .then((docRef) => {
      console.log("Compra salva com ID:", docRef.id);
      // Aqui você pode chamar a função para gerar o PDF com os dados
    })
    .catch((error) => {
      console.error("Erro ao salvar a compra: ", error);
    });
  };
  
  
    return (
    <div>

      <h4>Resumo da Compra</h4>

      <p>Método de Obtenção: {metodoObtencao}</p>
      <p>Método de Pagamento: {metodoPagamento}</p>
      <p>Informações de Entrega:</p>
      <ul>
        <li>Nome Completo: {informacoesEntrega.nomeCompleto}</li>
        <li>Endereço: {informacoesEntrega.endereco}</li>
        <li>Email: {informacoesEntrega.email}</li>
        <li>Telefone: {informacoesEntrega.telefone}</li>
        <li>País: {informacoesEntrega.pais}</li>
      </ul>
      <button onClick={finalizarCompra}>Finalizar Compra</button>
    </div>
  );
};

export default ResumoCompra;
