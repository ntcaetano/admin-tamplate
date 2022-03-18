import Layout from "../components/template/Layout";
import { useTheme } from "../hooks/useTheme";

export default function Notificacoes() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações"
    >
    {theme}
      {/* <h1>O tema é {theme}</h1> */}
      <button onClick={toggleTheme}>Alternar Tema</button>
    </Layout>
  );
}
