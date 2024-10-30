import { FEN } from "./src/formats.ts"
import {
  type Board,
  type Color,
  File,
  INITIAL_BOARD,
  INITIAL_REVERSE_BOARD,
  type InputMove,
  IsGameOver,
  type Promotable,
  type Rank,
  ReverseBoard,
  type SquareNotation,
} from "./src/types.ts"
import { addFile, boardToReversed, isValidSquareNotation } from "./src/utils.ts"

class Chess {
  public position: FEN

  private board = new Proxy({ ...INITIAL_BOARD }, {
    set: (target, property, newValue, r) => {
      this.reverseBoard = new Proxy(
        boardToReversed({ ...target, [property]: newValue }),
        { set: () => false },
      )
      return Reflect.set(target, property, newValue, r)
    },
  })
  private reverseBoard = new Proxy({ ...INITIAL_REVERSE_BOARD }, {
    set: () => {
      return false
    },
  })

  get turn(): Color {
    return this.position.turn
  }

  constructor(fen?: string) {
    this.position = new FEN(
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    )
  }

  public move(_move: InputMove) {
    if (!isValidSquareNotation(_move.from)) return
    if (!isValidSquareNotation(_move.to)) return

    const toSquarePiece = this.board[_move.to]
    const fromSquarePiece = this.board[_move.from]

    const isTaking = toSquarePiece != "."

    // let move = `${fromSquare.piece == "P" ? from[1] : fromSquare}${
    //   isTaking ? "x" : ""
    // }${_move.to}`

    // if (
    //   (toRow == 1 || toRow == 8) &&
    //   this.board[fromRow][fromColumn].toUpperCase() == "P" &&
    //   _move.promotion
    // )
    //   move += `=${_move.promotion}`

    // console.log(move)
  }

  // public isInCheck(): Color[] {
  //   const blackKingPosition = this.reverseBoard.k
  //   const whiteKingPosition = this.reverseBoard.K
  // }

  public _allMoves(square: SquareNotation): SquareNotation[] {
    const moves: string[] = []

    const squarePiece = this.board[square]
    if (squarePiece == ".") return []

    if (squarePiece.toUpperCase() == "N") {
      const s = square.split("")
      const file = s[0] as File
      const rank = Number(s[1])

      for (let i = -1; i < 2; i += 2) {
        moves.push(
          `${addFile(file, 2 * i)}${rank + 1 * i}`,
          `${addFile(file, 1 * i)}${rank + 2 * i}`,
          `${addFile(file, -2 * i)}${rank + 1 * i}`,
          `${addFile(file, -1 * i)}${rank + 2 * i}`,
        )
      }
    }

    return moves.filter(isValidSquareNotation)
  }

  // public isGameOver(): IsGameOver {
  // }
}

export default Chess
