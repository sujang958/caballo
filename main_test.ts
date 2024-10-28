import { assertEquals } from "@std/assert"
import Chess from "./main.ts";
import { INITIAL_BOARD } from "./src/types.ts";

Deno.test(function boardTest() {
  const chess = new Chess()
  
  assertEquals(chess.board, INITIAL_BOARD)
})

Deno.test(function properMoveTest() {
  const chess = new Chess()

  chess.move({ from: "e2", to: "e4" })
})