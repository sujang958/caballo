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
