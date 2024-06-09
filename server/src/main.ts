import { createExpressServer } from "routing-controllers";
import "dotenv/config";

let PORT = 3002;

const app = createExpressServer({
  //cors: true,
  routePrefix: "/bp",

  controllers: [__dirname + "/controllers/*{.js,.ts}"],
});

app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});
