import { useEffect, useState } from "react";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import Header from "../components/header";
// import Footer from "../components/footer";
import { toast } from "react-toastify";
import logo from "../img/logo.png";
// import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { v4 as uuidv4 } from "uuid";
// import BannerPreto from "../components/banner_preto";
import { NavLink } from "react-router-dom";
import { db } from "./config";

function SubmitP({ nomee, emaill, cart }) {
  const [fotoUrl, setFotoUrl] = useState("");
  document.title = "Adicionar material/equipamento | D'Aluguel";

  const [use, setUser] = useState([]);

  useEffect(() => {
    // Adicione um listener para o estado da autenticação
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // Se não houver usuário autenticado, redirecione para a página de login

        const userData = {
          name: "",
          email: "",
          tel: "",
          uid: "",
        };

        localStorage.setItem("users", JSON.stringify(userData));
      }
    });

    // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
    return unsubscribe;
  }, []);

  useEffect(() => {
    // Obtém o valor de 'users' do local storage quando o componente for montado
    const userString = localStorage.getItem("users");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);

      // Aqui você pode chamar uma função para obter o telefone com base no e-mail
      obterTelefonePorEmail(user.email);
    } else {
      const userData = {
        name: "",
        email: "",
        pictureUrl: "",
        tel: "",
      };
      setUser(userData);
    }
  }, []);

  // Função para obter o telefone com base no e-mail
  const obterTelefonePorEmail = async (email) => {
    try {
      const usersRef = firebase.firestore().collection("users");
      const snapshot = await usersRef.where("email", "==", email).get();

      if (!snapshot.empty) {
        const documento = snapshot.docs[0].data();
        const telefone = documento.tel;

        // Atualize o estado com o telefone obtido
        setUser((prevState) => ({
          ...prevState,
          tel: telefone,
        }));
      }
    } catch (error) {
      console.error("Erro ao obter telefone por e-mail:", error);
    }
  };

  const uiid = uuidv4();

  const [projeto, setProjeto] = useState({
    nome: "",
    quantidade: "",
    marca: "",
    estado: "",
    descricao: "",
    preco: "",
    desconto: "",
    categoria: "",
    entrega: "",
    id: uiid,
  });

  // Adiciona um estado para rastrear se todos os campos estão preenchidos
  const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false);

  const handleChange = (event) => {
    setProjeto({
      ...projeto,
      [event.target.name]: event.target.value,
    });
    const camposPreenchidos = Object.values(projeto).every((campo) => {
      // Verifica se o campo é uma string antes de chamar trim()
      if (typeof campo === "string") {
        return campo.trim() !== "";
      }
      // Se não for uma string, considera como preenchido
      return true;
    });
    setTodosCamposPreenchidos(camposPreenchidos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = firebase.auth().currentUser;

    // Verifique se projeto.imagens está definido antes de mapear
    const imagens = projeto.imagens
      ? projeto.imagens.map((imagem) => imagem.name)
      : [];

    addDoc(collection(db, "produtos"), {
      ...projeto,
      fotoUrls: imagens,
    })
      .then(() => {
        toast.info("Projeto adicionado com sucesso!");
      })
      .catch((erro) => {
        toast.info("Erro ao adicionar o projeto:", erro);
      });

    // Resetar o estado do todosCamposPreenchidos
    setTodosCamposPreenchidos(false);
  };

  const handleFileInputChange = (event) => {
    const arquivos = event.target.files;
    const storage = getStorage();

    Promise.all(
      Array.from(arquivos).map((arquivo) => {
        // Gera um nome de arquivo único baseado no tempo atual e no nome original do arquivo
        const nomeUnico = `${Date.now()}-${arquivo.name}`;

        const storageRef = ref(storage, `produtos/${nomeUnico}`);
        return uploadBytes(storageRef, arquivo)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .then((url) => ({ name: nomeUnico, url })) // Adiciona o nome do arquivo único ao objeto
          .catch((erro) => {
            console.error("Erro ao enviar o arquivo:", erro);
            throw erro;
          });
      })
    )
      .then((urlsImagens) => {
        // Atualiza o estado do projeto incrementalmente
        setProjeto((prevProjeto) => ({
          ...prevProjeto,
          imagens: [...(prevProjeto.imagens || []), ...urlsImagens],
        }));
      })
      .catch((erro) => {
        console.error("Erro ao enviar arquivos:", erro);
      });
  };

  return (
    <div className="">
      {/* <Header cart={cart} nomee={nomee} emaill={emaill} /> */}
      <div className="container">
        <br />
        <br />
        <center>
          <img src={logo} style={{ height: "4em" }} alt="" />
        </center>
        <h2 className="text-primary">Adicionar Artigo</h2>
      </div>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <b>Adicione os produtos que serão apresentados á loja!</b>
          <br />
          <hr />
          {
            <>
              <div className="row">
                <div className="col-12 col-sm-4 my-2">
                  <label htmlFor="titulo" className="f-12 text-secondary">
                    Nome do produto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    value={projeto.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-4 my-2">
                  <label htmlFor="titulo" className="f-12 text-secondary">
                    Marca / Modelo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="marca"
                    value={projeto.marca}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-4 my-2">
                  <label htmlFor="titulo" className="f-12 text-secondary">
                    Estado do artigo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="estado"
                    value={projeto.estado}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="descricao" className="f-12 text-secondary">
                    Breve Descricão do Produto
                  </label>

                  <textarea
                    maxLength={2000}
                    type="text"
                    placeholder="Adicione uma descricao do produto "
                    className="form-control"
                    name="descricao"
                    value={projeto.descricao}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <label htmlFor="thumbnail" className="f-12 text-secondary">
                    Imagens do produto (Adicione no mínimo 3)
                  </label>
                  <input
                    multiple
                    type="file"
                    id="thumbnail"
                    name="thumbnail"
                    className="form-control"
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <label htmlFor="titulo" className="f-12 text-secondary">
                    Quantidade Disponível
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantidade"
                    value={projeto.quantidade}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="categoria" className="f-12 text-secondary">
                    Categoria do produto
                  </label>
                  <select
                    className="form-control"
                    name="categoria"
                    value={projeto.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected hidden>
                      Selecione uma categoria
                    </option>
                    <option value="Telefones">Telefones</option>
                    <option value="Tablets">Tablets</option>
                    <option value="PowerBank">PowerBank</option>
                    <option value="Smart Watch">Smart Watch</option>
                    <option value="Carregadores">Carregadores</option>
                    {/* Adicione mais opções conforme necessário */}
                  </select>
                </div>
              </div>
              <div className="col-12 my-2">
                <fieldset>
                  <div>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Valores (AOA)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Preço do produto</td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="preco"
                              value={projeto.preco}
                              onChange={handleChange}
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Desconto ( % )</td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="desconto"
                              value={projeto.desconto}
                              onChange={handleChange}
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Entrega</td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="entrega"
                              value={projeto.entrega}
                              onChange={handleChange}
                              required
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
              </div>
              <div className="d-grid mt-4">
                <button
                  disabled={!todosCamposPreenchidos}
                  type="submit"
                  className="btn rounded-0 btn-outline-primary text-dark"
                >
                  Enviar Artigo
                </button>
              </div>
            </>
          }
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default SubmitP;
