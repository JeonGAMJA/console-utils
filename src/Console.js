import readlineSync from "readline-sync";

export class Console {
  static readLine(message) {
    console.log(message);
    return readlineSync.question("");
  }

  static print(message) {
    console.log(message);
  }
}
