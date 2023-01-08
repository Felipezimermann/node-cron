import { schedule, getTasks } from "node-cron";
import { saldoPedido } from "jobs/pedido";

const data = new Date();
console.time("pedido");
schedule("*/5 * * * * *", async () => await saldoPedido(), { name: "pedido" });

schedule(
  "* * * * * *",
  async () => {
    const monito = getTasks();
    const pedido = monito.get("pedido");
    console.log(pedido.on);
    pedido.on("connection", (stream) => {
      console.log("someone connected!");
    });
  },
  { name: "monitoramento" }
);
