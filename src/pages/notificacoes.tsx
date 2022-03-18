import Layout from "../components/template/Layout";
import { useTema } from "../hooks/useTema";

export default function Notificacoes() {
  const { AlternarTema, tema } = useTema();

  return (
    <Layout titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações">
      <h1>Notificações</h1>
    </Layout>
  );
}
