export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type File = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"

export type SquareNotation = `${File}${Rank}`

export type Promotable = "N" | "Q" | "R" | "B"

export type Piece =
  | "N"
  | "K"
  | "Q"
  | "R"
  | "B"
  | "P"
  | "n"
  | "k"
  | "q"
  | "r"
  | "b"
  | "p" // lowercase for the black

export type Square = Piece | "."

export type Board = [
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square]
]

export const INITIAL_BOARD: Board = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
]

export type Turn = "WHITE" | "BLACK"
