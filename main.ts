import { FEN } from "./formats.ts"
import type {
  Board,
  File,
  Promotable,
  Rank,
  SquareNotation,
  Turn,
} from "./types.ts"

class Chess {
  public position: FEN

  get board(): Board {
    const rows = this.position.fen.split("/")
    rows[7] = rows[7].split(" ")[0]

    return rows.map((square) =>
      isNaN(Number(square))
        ? square.split("")
        : ".,".repeat(Number(square)).slice(0, -1).split(",")
    ) as Board
  }

  getSquare(square: SquareNotation) {
    return this.board[8 - rank][file.charCodeAt(0) - 97]
  }

  get turn(): Turn {
    return this.position.turn
  }

  constructor(fen?: string) {
    this.position = new FEN(
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    )
  }

  isValidSquareNotation(square: string): square is SquareNotation {
    const [f, r] = square.split("")
    const file = f.charCodeAt(0)
    const rank = Number(r)

    if (file < 97 || file > 104) return false
    if (rank < 1 || rank > 8) return false

    return true
  }

  public move(_move: { from: string; to: string; promotion?: Promotable }) {
    if (!this.isValidSquareNotation(_move.from)) return
    if (!this.isValidSquareNotation(_move.to)) return

    const toPiece = this.getSquare(_move.to)
    const fromPiece = this.getSquare(_move.from)

    console.log(fromPiece, toPiece, fromColumn, fromRow)

    const isTaking = toPiece != ("." as const)
    let move = `${fromPiece == "P" ? from[1] : fromPiece}${
      isTaking ? "x" : ""
    }${_move.to}`

    if (
      (toRow == 1 || toRow == 8) &&
      this.board[fromRow][fromColumn].toUpperCase() == "P" &&
      _move.promotion
    )
      move += `=${_move.promotion}`

    console.log(move)
  }
}

export default Chess
