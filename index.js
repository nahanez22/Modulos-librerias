import * as modulosController from "./modulos/controller.js";
import chalk from "chalk";

const resultado = modulosController.multiplicar(
  modulosController.suma(1, 2),
  modulosController.suma(4, 5)
);
console.log(chalk.green(resultado));
