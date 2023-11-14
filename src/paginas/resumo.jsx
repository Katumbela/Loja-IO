import React from "react";

const ResumoCompra = ({ metodoObtencao, metodoPagamento, informacoesEntrega, finalizarCompra }) => {
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
