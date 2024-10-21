import { assertEquals } from "@std/assert"
import Chess from "./main.ts";
import { INITIAL_BOARD } from "./types.ts";

Deno.test(function boardTest() {
  const chess = new Chess()
  
  assertEquals(chess.board, INITIAL_BOARD)
})
