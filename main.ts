import { FEN } from "./src/formats.ts"
import {
  type Board,
  CastlingSymbol,
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
import {
  addFile,
  boardToReversed,
  isValidSquareNotation,
  pieceColor,
} from "./src/utils.ts"

class Chess {
  public position: FEN

  private moves: string[] = []

  private board = new Proxy(
    { ...INITIAL_BOARD },
    {
      set: (target, property, newValue, r) => {
        this.reverseBoard = new Proxy(
          boardToReversed({ ...target, [property]: newValue }),
          { set: () => false }
        )
        return Reflect.set(target, property, newValue, r)
      },
    }
  )
  private reverseBoard = new Proxy(
    { ...INITIAL_REVERSE_BOARD },
    {
      set: () => {
        return false
      },
    }
  )

  get turn(): Color {
    return this.position.turn
  }

  constructor(fen?: string) {
    this.position = new FEN(
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    )
  }

  public move(_move: InputMove | CastlingSymbol) {
    if (typeof _move == "string") return // TODO: handle

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

  /**
   * @private
   * @param square
   * @returns
   */
  public _allMoves(square: SquareNotation): Set<SquareNotation> {
    const moves = new Set<string>()

    const squarePiece = this.board[square].toUpperCase()
    const color = pieceColor(this.board[square])
    if (squarePiece == ".") return new Set()

    if (squarePiece == "N") {
      const s = square.split("")
      const file = s[0] as File
      const rank = Number(s[1])

      for (let i = -1; i < 2; i += 2) {
        moves
          .add(`${addFile(file, 2 * i)}${rank + 1 * i}`)
          .add(`${addFile(file, 1 * i)}${rank + 2 * i}`)
          .add(`${addFile(file, -2 * i)}${rank + 1 * i}`)
          .add(`${addFile(file, -1 * i)}${rank + 2 * i}`)
      }
    } else if (squarePiece == "R") {
      ;`${square} `
        .repeat(8)
        .split(" ")
        .map((square, i) => `${square.at(0)}${i}`)
        .forEach((v) => moves.add(v))
      ;`${square} `
        .repeat(8)
        .split(" ")
        .map((square, i) => `${String.fromCharCode(97 + i)}${square.at(1)}`)
        .forEach((v) => moves.add(v))
    }

    moves.delete(square)

    return new Set(moves.values().filter(isValidSquareNotation))
  }

  public _isLegal(square: SquareNotation, move: SquareNotation) {
    const fromSquarePiece = this.board[square]
    const targetSquarePiece = this.board[move]

    if (fromSquarePiece == ".") return false
    if (targetSquarePiece.toUpperCase() == "K") return false

    // TODO: en passant

    const toSameColor =
      pieceColor(targetSquarePiece) == pieceColor(fromSquarePiece)
    const isTaking = !toSameColor && targetSquarePiece != "."

    if (toSameColor) {
      return false
    }

    if (isTaking) {
    }
  }

  // public isGameOver(): IsGameOver {
  // }
}

export default Chess
