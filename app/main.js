"use strict";

function main(argv) {
  /**
   * このコードは引数と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use arguments and outputs.
   * You can edit and even remove this code as you like.
   */
  argv = ['World', 'codecheck', '織田信長'];
  argv.forEach((v, i) => console.log('Hello',`${v}`,'!'));
}

module.exports = main;
