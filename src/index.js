import { number1, number2 } from "./app";

require("./style.css");

const great = (name) => `Hello ${name}`;
console.log(great);
class App {
  static add(a, b) {
    return a + b;
  }
}
const newApp = new App();

console.log(newApp.add(number1, number2));
