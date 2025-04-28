import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../core/ClienteRepositorio";

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  useEffect(() => {}, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
    setCliente(cliente);
    setVisivel("form");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Exclui.. ${cliente.nome}`);
  }

  function novoCliente() {
    console.log(Cliente.vazio);
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  async function salvarCliente(cliente: Cliente) {
    await setCliente(cliente);
    obterTodos();
  }

  return (
    <span
      className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={() => {
                  console.log("Abrindo formulário de cliente");
                  setVisivel(novoCliente);
                }}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </span>
  );
}
