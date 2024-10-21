import type { Turn } from "./types.ts"

export class FEN {
  get blocks() {
    return this.fen.split(" ")
  }

  get turn(): Turn {
    return this.blocks[1] == "w" ? "WHITE" : "BLACK"
  }

  constructor(public fen: string) {}
}
