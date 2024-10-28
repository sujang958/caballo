import { FEN } from "./src/formats.ts"
import {
  type Board,
  type File,
  type InputMove,
  type Promotable,
  type Rank,
  type SquareNotation,
  type Color,
  INITIAL_BOARD,
} from "./src/types.ts"

class Chess {
  public position: FEN

  private board = { ...INITIAL_BOARD }

  get turn(): Color {
    return this.position.turn
  }

  constructor(fen?: string) {
    this.position = new FEN(
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    )
  }

  static isValidSquareNotation(square: string): square is SquareNotation {
    const [f, r] = square.split("")
    const file = f.charCodeAt(0)
    const rank = Number(r)

    if (file < 97 || file > 104) return false
    if (rank < 1 || rank > 8) return false

    return true
  }

  public move(_move: InputMove) {
    if (!Chess.isValidSquareNotation(_move.from)) return
    if (!Chess.isValidSquareNotation(_move.to)) return

    const toSquare = this.getSquare(_move.to)
    const fromSquare = this.getSquare(_move.from)

    const isTaking = toSquare.piece != "."

    let move = `${fromSquare.piece == "P" ? from[1] : fromSquare}${
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

  public checkCheck(): Color | null {
    this.board.find((rank) => rank.findIndex((piece) => piece == "K"))
  }
}

export default Chess
