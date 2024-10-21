import type { Board } from "./types.ts"

class Chess {
  _position: string

  get position() {
    return this._position
  }

  set position(position: string) {
    // TODO: add validating fen
    this._position = position
  }

  get board(): Board {
    const rows = this._position.split("/")
    rows[7] = rows[7].split(" ")[0]

    return rows.map((square) =>
      isNaN(Number(square))
        ? square.split("")
        : ".,".repeat(Number(square)).slice(0, -1).split(",")
    ) as Board
  }

  constructor(fen?: string) {
    this._position =
      fen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  }
}

export default Chess
