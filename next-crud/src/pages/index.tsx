import Botao from "../components/Botao";
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

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Exclui.. ${cliente.nome}`);
  }
  return (
    <span
      className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end mb-4">
          <Botao>Novo Cliente</Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </span>
  );
}
