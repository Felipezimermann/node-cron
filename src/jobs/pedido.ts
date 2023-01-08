import getNomeAleatorio from "@/utils/nomeAleatorio";

export async function saldoPedido(): Promise<void> {
  const data = new Date();

  const objeto = {
    id: 1,
    codigo: 123,
  };
  const nome = getNomeAleatorio();
  //console.log(`1 ${nome}`);

  await espera(nome);

  //console.log(`3 ${nome}`);
  //console.log(`terminado ${nome}`);
  console.timeLog(`pedido`);
}

function espera(nome: string) {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      // console.log(`2 ${nome}`);
      resolve();
    }, 10000)
  );
}
