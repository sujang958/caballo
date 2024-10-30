import { assertEquals } from "@std/assert"
import Chess from "./main.ts";
import { INITIAL_BOARD } from "./src/types.ts";


Deno.test(function allmovesTest() {
  const chess = new Chess()

  console.log(chess._allMoves("b1"))
})