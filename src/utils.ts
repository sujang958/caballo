import type {
  Board,
  File,
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

/**
 * Does not always gurantee that the return value is a valid notation
 * @param file
 * @param n
 * @returns
 */
export const addFile = (file: File, n: number) =>
  String.fromCharCode(file.charCodeAt(0) + n)

export const isValidSquareNotation = (
  square: string,
): square is SquareNotation => {
  const [f, r] = square.split("")
  const file = f.charCodeAt(0)
  const rank = Number(r)

  if (isNaN(rank)) return false
  if (file < 97 || file > 104) return false
  if (rank < 1 || rank > 8) return false

  return true
}
