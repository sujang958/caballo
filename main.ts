import { FEN } from "./formats.ts"
import type { Board, Turn } from "./types.ts"

class Chess {
  public position: FEN

  get board(): Board {
    const rows = this.position.split("/")
    rows[7] = rows[7].split(" ")[0]

    return rows.map((square) =>
      isNaN(Number(square))
        ? square.split("")
        : ".,".repeat(Number(square)).slice(0, -1).split(",")
    ) as Board
  }

  get turn(): Turn {
    return this.position.turn
  }

  constructor(fen?: string) {
    this.position = new FEN(
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    )
  }

  public move(move: { from: string; to: string }) {
    const [fromRow, fromColumn] = move.from.split("")
    const [toRow, toColumn] = move.to.split("")

    const fromPiece = this.board[fromRow.charCodeAt(0) - 97][Number(fromColumn)]
    const toPiece = this.board[toRow.charCodeAt(0) - 97][Number(toColumn)]
    
  }
}

export default Chess
