import type {
  Board,
  Move,
  ReverseBoard,
  Square,
  SquareNotation,
} from "./types.ts"

// export const decodeAlgebraicNotation = (notation: string): Move => {
// }

// export const encodeAlgebraicNotation = (move: Move): string => {
// }

export const boardToReversed = (board: Board): ReverseBoard => {
  const reversed: ReverseBoard = {
    "R": [],
    "P": [],
    ".": [],
    "p": [],
    "r": [],
    "N": [],
    "n": [],
    "B": [],
    "b": [],
    "Q": [],
    "q": [],
    "K": "e1",
    "k": "e8",
  }

  Object.entries(board).forEach((e) => {
    const [notation, piece] = e as [SquareNotation, Square]

    if (piece.toUpperCase() == "K") {
      reversed[piece as "K" | "k"] = notation
    } else reversed[piece as Exclude<Square, "k" | "K">].push(notation)
  })

  return reversed
}
