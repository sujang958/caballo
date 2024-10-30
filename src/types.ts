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

export type Board = Record<SquareNotation, Square>
export type ReverseBoard = Omit<Record<Square, SquareNotation[]>, "K" | "k"> & {
  k: SquareNotation
  K: SquareNotation
}

export type TieReason = ""
export type DefeatReason = "CHECKMATE"

export type GameOverReason =
  | "CHECKMATE"
  | "INSUFFICIENT_MATERIAL"
  | "THREEFOLD_REPETITION"
  | "STALEMATE"

export type IsGameOver = { over: false } | {
  over: true
  reason: GameOverReason
}

/*[
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square],
  [Square, Square, Square, Square, Square, Square, Square, Square]
]*/

// export const INITIAL_BOARD: Board = [
//   ["r", "n", "b", "q", "k", "b", "n", "r"],
//   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   ["R", "N", "B", "Q", "K", "B", "N", "R"],
// ]

// .map((a, i) => a.map((v, j) => [`${String.fromCharCode(97 + j % 8)}${8 - i % 8}`, v]))).flat(1))

export const INITIAL_BOARD: Board = {
  a1: "R",
  a2: "P",
  a3: ".",
  a4: ".",
  a5: ".",
  a6: ".",
  a7: "p",
  a8: "r",
  b1: "N",
  b2: "P",
  b3: ".",
  b4: ".",
  b5: ".",
  b6: ".",
  b7: "p",
  b8: "n",
  c1: "B",
  c2: "P",
  c3: ".",
  c4: ".",
  c5: ".",
  c6: ".",
  c7: "p",
  c8: "b",
  d1: "Q",
  d2: "P",
  d3: ".",
  d4: ".",
  d5: ".",
  d6: ".",
  d7: "p",
  d8: "q",
  e1: "K",
  e2: "P",
  e3: ".",
  e4: ".",
  e5: ".",
  e6: ".",
  e7: "p",
  e8: "k",
  f1: "B",
  f2: "P",
  f3: ".",
  f4: ".",
  f5: ".",
  f6: ".",
  f7: "p",
  f8: "b",
  g1: "N",
  g2: "P",
  g3: ".",
  g4: ".",
  g5: ".",
  g6: ".",
  g7: "p",
  g8: "n",
  h1: "R",
  h2: "P",
  h3: ".",
  h4: ".",
  h5: ".",
  h6: ".",
  h7: "p",
  h8: "r",
}

export const INITIAL_REVERSE_BOARD: ReverseBoard = {
  "R": ["a1", "h1"],
  "P": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ".": [
    "a3",
    "a4",
    "a5",
    "a6",
    "b3",
    "b4",
    "b5",
    "b6",
    "c3",
    "c4",
    "c5",
    "c6",
    "d3",
    "d4",
    "d5",
    "d6",
    "e3",
    "e4",
    "e5",
    "e6",
    "f3",
    "f4",
    "f5",
    "f6",
    "g3",
    "g4",
    "g5",
    "g6",
    "h3",
    "h4",
    "h5",
    "h6",
  ],
  "p": ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  "r": ["a8", "h8"],
  "N": ["b1", "g1"],
  "n": ["b8", "g8"],
  "B": ["c1", "f1"],
  "b": ["c8", "f8"],
  "Q": ["d1"],
  "q": ["d8"],
  "K": "e1",
  "k": "e8",
}

export type Color = "WHITE" | "BLACK"

export type InputMove = {
  from: SquareNotation
  to: SquareNotation
  promotion?: Promotable
}

export type Move = InputMove & {
  movingPiece: Piece
  from: File | Rank | SquareNotation
  check: boolean
  mate: boolean
  isTaking: boolean
}
