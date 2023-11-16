import { getDocs, collection } from 'firebase/firestore';
import { db } from './config';

const getFirestoredata = async () => {
  const projectosCollection = collection(db, 'produtos');

  try {
    const querySnapshot = await getDocs(projectosCollection);

    const data = querySnapshot.docs.map((doc) => {
      const projecto = doc.data();

      // Verificar se as propriedades necessárias estão definidas
      const fotoUrls = projecto.fotoUrls?.map((url, index) => ({
        index,
        url,
      })) || [];

      const imagens = projecto.imagens?.map((imagem) => ({
        name: imagem.name,
        url: imagem.url,
      })) || [];

      return {
        desconto: projecto.desconto || "",
        descricao: projecto.descricao || "",
        entrega: projecto.entrega || "",
        estado: projecto.estado || "",
        endereco: projecto.endereco || "",
        fotoUrls,
        docId: doc.id,
        imagens,
        marca: projecto.marca || "",
        preco: projecto.preco || "",
        modelo: projecto.modelo || "",
        categoria: projecto.categoria || "",
        nome: projecto.nome || "",
        uid: projecto.uid || "",
        quantidade: projecto.quantidade || "",
      };
    });

    return data;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    throw error;
  }
};

const getProdutoData = async () => {
  try {
    const cursos = await getFirestoredata();
    return cursos;
  } catch (error) {
    console.error('Error getting product data:', error);
    throw error;
  }
};

export default getProdutoData;
