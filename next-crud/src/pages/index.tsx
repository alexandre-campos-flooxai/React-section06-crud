import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Alex", 32, "1"),
    new Cliente("Paulo", 35, "2"),
    new Cliente("Ricardo", 20, "3"),
    new Cliente("João", 45, "4"),
    new Cliente("Kaio", 32, "5"),
  ];
  return (
    <span
      className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </span>
  );
}
