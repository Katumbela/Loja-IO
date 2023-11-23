import React from "react";
import { db } from "./config";
import jsPDF from "jspdf";
import { BsBoxSeamFill, BsCash } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResumoCompra = ({
  metodoObtencao,
  metodoPagamento,
  informacoesEntrega,
  cart,
  setCarrinho,
  finalizarCompra,
}) => {
  const navigate = useNavigate();

  // Preço Total
  const Precototal = cart.reduce(
    (preco, item) => preco + item.quantidade * item.preco,
    0
  );

  // Preço Total
  const PrecototalDesconto =
    (cart.reduce((preco, item) => preco + item.quantidade * item.desconto, 0) /
      100) *
    Precototal;

  let precoEntrega = metodoObtencao != "encomendar" ? 0 : 1500;

  const formatter = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA", // Código de moeda para Kwanza Angolano
    minimumFractionDigits: 2,
  });

  const precoTotalFormatado = formatter.format(
    Precototal + precoEntrega - PrecototalDesconto
  );

  const precoTotalCompras = formatter.format(Precototal);

  const gerarPDF = (
    metodoObtencao,
    metodoPagamento,
    informacoesEntrega,
    codigoRandomico,
    cart
  ) => {
    const pdf = new jsPDF();
    pdf.text("Resumo da Compra - LOJA IO", 40, 10);
    pdf.text(`Codigo de Compra: ${codigoRandomico}`, 20, 20);
    pdf.text(`Método de Obtenção: ${metodoObtencao}`, 20, 30);
    pdf.text(`Método de Pagamento: ${metodoPagamento}`, 20, 40);
    pdf.text("Informações de Entrega:", 20, 50);
    pdf.text(`Nome Completo: ${informacoesEntrega.nomeCompleto}`, 20, 60);
    pdf.text(`Endereço: ${informacoesEntrega.endereco}`, 20, 70);
    pdf.text(`Email: ${informacoesEntrega.email}`, 20, 80);
    pdf.text(`Telefone: ${informacoesEntrega.telefone}`, 20, 90);
    pdf.text(`País: ${informacoesEntrega.pais}`, 20, 100);
    pdf.text("Produtos:", 20, 110);

    pdf.text("Produtos:", 20, 110);

    let offsetY = 120; // Inicie a posição Y para a lista de produtos

    cart.forEach((item) => {
      // Configurar o tamanho da fonte para o nome do produto
      pdf.setFontSize(12); // Tamanho da fonte para o nome do produto
      pdf.text(`- ${item.nome}`, 20, offsetY);

      // Configurar o tamanho da fonte para preço e quantidade
      pdf.setFontSize(10); // Tamanho da fonte para preço e quantidade
      pdf.text(
        `  Preço: ${formatter.format(item.preco)} | Quantidade: ${item.quantidade}`,
        20,
        offsetY + 5
      );

      offsetY += 20; // Ajuste para a próxima entrada
    });

    pdf.setFontSize(14);
    pdf.text("Total ( AOA ):" + precoTotalFormatado, 20, offsetY + 30);

    // Aqui você pode adicionar mais informações ao PDF conforme necessário

    // Salvar o PDF ou abrir em uma nova janela
    // pdf.save("resumo_compra.pdf");
    window.open(pdf.output("bloburl"), "_blank");
  };
  // Exemplo de como salvar dados no Firestore
  const salvarDadosFirestore = (
    metodoObtencao,
    metodoPagamento,
    informacoesEntrega
  ) => {
    db.collection("compras")
      .add({
        metodoObtencao,
        metodoPagamento,
        informacoesEntrega,
        cart,
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

  const gerarCodigoRandomico = () => {
    // Implemente a lógica para gerar um código randômico
    return Math.floor(Math.random() * 1000).toString();
  };

  const finalizarCompras = () => {
    const codigoRandomico = gerarCodigoRandomico();
    salvarDadosFirestore(metodoObtencao, metodoPagamento, informacoesEntrega);
    gerarPDF(
      metodoObtencao,
      metodoPagamento,
      informacoesEntrega,
      codigoRandomico,
      cart
    );

    // Redirecionar para a página de sucesso ou fazer qualquer outra ação necessária
    window.location.href = "/successful_buy";
  };

  //Remover produto
  const remover = (produto) => {
    const existe = cart.find((x) => {
      return x.id === produto.id;
    });
    if (existe.quantidade > 0) {
      setCarrinho(
        cart.filter((x) => {
          return x.id !== produto.id;
        })
      );
    }
  };
  const cancelarCompra = () => {
    Swal.fire({
      title: "Aviso !",
      text: ` tem a certeza que deseja cancelar compra ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim tenho",
      cancelButtonText: "Continuar comprando",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirecionar para a página de finalização de compra
        window.location.href = "/";

        // navigate("/finalizar");
      } else {
        // Continuar comprando (fechar o popup)
        Swal.close();
      }
    });
  };
  return (
    <div className="container py-5">
      <div className="container">
        <h2>
          <b className="text-primary">Loja I O</b> - By AROTEC
        </h2>
      </div>
      <div className="row flex-row-reverse">
        <div className="col-12 col-md-4 my-4  col-lg-3">
          <div className="card-resumo rounded-4 shadow">
            <b>Resumo de compra</b>
            <br />
            <div className="d-flex by mt-2 text-secondary justify-content-between">
              <span>Itens:</span>
              <span>{precoTotalCompras} </span>
            </div>
            {metodoObtencao == "encomendar" && (
              <div className="d-flex by mt-2 text-secondary justify-content-between">
                <span>Entrega:</span>
                <span>{formatter.format(precoEntrega)}</span>
              </div>
            )}

            <div className="d-flex by mt-2 text-secondary justify-content-between">
              <span>Desconto:</span>
              <span>{formatter.format(PrecototalDesconto)}</span>
            </div>

            <div className="d-flex byy text-secondary justify-content-between">
              <span>Total:</span>
              <span className="text-primary">{precoTotalFormatado} </span>
            </div>
            <button
              className="btn-sm w-100 btn btn-outline-primary"
              onClick={finalizarCompras}
            >
              Finalizar Compra
            </button>
            <a
              onClick={() => {
                cancelarCompra();
              }}
              className="btn-sm w-100 btn btn-outline-danger mt-2"
            >
              Cancelar Compra
            </a>
          </div>
        </div>
        <div className="col-12 px-md-4 my-4 col-md-8 col-lg-9">
          <div>
            <div className="info-entrega bg-white shadow rounded-4 ">
              <h4>Informações de Entrega:</h4>
              <ul>
                <li> {informacoesEntrega.nomeCompleto}</li>
                <li> {informacoesEntrega.endereco}</li>
                <li>
                  {" "}
                  {informacoesEntrega.email} &middot;{" "}
                  {informacoesEntrega.telefone}{" "}
                </li>
                <li> {informacoesEntrega.pais}</li>
              </ul>
            </div>

            <div className="mt-3 info-entrega bg-white shadow rounded-4 ">
              <h4>Método de pagamento</h4>
              <p className="d-flex gap-2">
                <BsCash className="text-primary" />{" "}
                <span> {metodoPagamento}</span>
              </p>
              <div style={{ marginLeft: "1.5rem" }}>
                <span className="nota">
                  <b className="text-primary">Nota:</b>{" "}
                  <span>
                    Favor submeter o comprovante via email{" "}
                    <a href="mailto:arotec.info@gmail.com">
                      arotec.info@gmail.com
                    </a>{" "}
                    ou na <NavLink>pagina</NavLink> de rastreio usando o seu
                    codigo de compra
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-3 info-entrega bg-white shadow rounded-4 ">
              <h4>Método de entrega</h4>
              <p className="d-flex gap-2">
                <BsBoxSeamFill className="text-primary" />{" "}
                <span className="my-auto"> {metodoObtencao}</span>
              </p>
              <p></p>
            </div>

            <div className="mt-3 info-entrega bg-white shadow rounded-4 ">
              <h4>Revise seus produtos</h4>
              <p className="d-flex gap-2">
                {cart.map((item) => {
                  return (
                    <div>
                      <div className=" ">
                        <div className="d-flex gap-2">
                          <img
                            style={{ height: "3em" }}
                            src={item.imagens[0]?.url}
                            alt=""
                          />{" "}
                          <div className="">
                            <h5
                              className="text-primary"
                              style={{ fontWeight: "lighter" }}
                            >
                              {item.nome}
                            </h5>
                            <span
                              style={{ fontSize: "12px" }}
                              className="d-flex text-secondary "
                            >
                              Preço: {formatter.format(item.preco)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumoCompra;
