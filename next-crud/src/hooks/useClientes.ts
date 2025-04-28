import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";
import Cliente from "../core/Cliente";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {}, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }
  function selecionarCliente(cliente: Cliente) {
    console.log(cliente.nome);
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    console.log(`Exclui.. ${cliente.nome}`);
    obterTodos();
  }

  function novoCliente() {
    console.log(Cliente.vazio);
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  async function salvarCliente(cliente: Cliente) {
    await setCliente(cliente);
    obterTodos();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  };
}
