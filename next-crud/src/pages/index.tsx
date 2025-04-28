import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("Alex", 32, "1"),
    new Cliente("Paulo", 35, "2"),
    new Cliente("Ricardo", 20, "3"),
    new Cliente("João", 45, "4"),
    new Cliente("Kaio", 32, "5"),
  ];

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

  function salvarCliente(cliente: Cliente) {
    console.log(cliente.nome);
    setVisivel("tabela");
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
