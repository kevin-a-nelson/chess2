
const UP = [
    { row: -1, column: 0 },
    { row: -2, column: 0 },
    { row: -3, column: 0 },
    { row: -4, column: 0 },
    { row: -5, column: 0 },
    { row: -6, column: 0 },
    { row: -7, column: 0 },
]

const DOWN = [
    { row: 1, column: 0 },
    { row: 2, column: 0 },
    { row: 3, column: 0 },
    { row: 4, column: 0 },
    { row: 5, column: 0 },
    { row: 6, column: 0 },
    { row: 7, column: 0 },
]

const LEFT = [
    { row: 0, column: -1 },
    { row: 0, column: -2 },
    { row: 0, column: -3 },
    { row: 0, column: -4 },
    { row: 0, column: -5 },
    { row: 0, column: -6 },
    { row: 0, column: -7 },
]

const RIGHT = [
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 0, column: 3 },
    { row: 0, column: 4 },
    { row: 0, column: 5 },
    { row: 0, column: 6 },
    { row: 0, column: 7 },
]

const LEFT_DOWN = [
    { row: 1, column: -1 },
    { row: 2, column: -2 },
    { row: 3, column: -3 },
    { row: 4, column: -4 },
    { row: 5, column: -5 },
    { row: 6, column: -6 },
    { row: 7, column: -7 },
]

const RIGHT_DOWN = [
    { row: 1, column: 1 },
    { row: 2, column: 2 },
    { row: 3, column: 3 },
    { row: 4, column: 4 },
    { row: 5, column: 5 },
    { row: 6, column: 6 },
    { row: 7, column: 7 },
]

const RIGHT_UP = [
    { row: -1, column: 1 },
    { row: -2, column: 2 },
    { row: -3, column: 3 },
    { row: -4, column: 4 },
    { row: -5, column: 5 },
    { row: -6, column: 6 },
    { row: -7, column: 7 },
]

const LEFT_UP = [
    { row: -1, column: -1 },
    { row: -2, column: -2 },
    { row: -3, column: -3 },
    { row: -4, column: -4 },
    { row: -5, column: -5 },
    { row: -6, column: -6 },
    { row: -7, column: -7 },
]

const VERTICAL = [
    ...UP,
    ...DOWN,
]

const HORIZONTAL = [
    ...LEFT,
    ...RIGHT,
]

const DIAGONAL = [
    ...RIGHT_DOWN,
    ...LEFT_DOWN,
    ...RIGHT_UP,
    ...LEFT_UP,
]

const KNIGHT = [
    { row: 2, column: 1 },
    { row: 2, column: -1 },
    { row: -2, column: 1 },
    { row: -2, column: -1 },
    { row: 1, column: 2 },
    { row: 1, column: -2 },
    { row: -1, column: 2 },
    { row: -1, column: -2 },
]

const KING = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: -1 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: -1 },
    { row: -1, column: 0 },
    { row: -1, column: 1 },
    { row: -1, column: -1 },
]

const BLACK_PAWN = [
    { row: 1, column: 0, onNoCapture: true },
    { row: 1, column: 1, onCapture: true },
    { row: 1, column: -1, onCapture: true },
    { row: 2, column: 0, onRow: 1 },
]

const WHITE_PAWN = [
    { row: -1, column: 0, onNoCapture: true },
    { row: -1, column: 1, onCapture: true },
    { row: -1, column: -1, onCapture: true },
    { row: -2, column: 0, onRow: 6 },
]

const MOVES = {
    rook: [
        ...VERTICAL,
        ...HORIZONTAL,
    ],
    bishop: [
        ...DIAGONAL
    ],
    queen: [
        ...VERTICAL,
        ...HORIZONTAL,
        ...DIAGONAL,
    ],
    knight: [
        ...KNIGHT,
    ],
    king: [
        ...KING,
    ],
    blackPawn: [
        ...BLACK_PAWN
    ],
    whitePawn: [
        ...WHITE_PAWN
    ]
}

export default {
    BR: {
        color: 'black',
        image: "BlackRook",
        moves: MOVES.rook
    },
    WR: {
        color: 'white',
        image: "WhiteRook",
        moves: MOVES.rook
    },
    BKn: {
        color: 'black',
        image: "BlackKnight",
        moves: MOVES.knight
    },
    WKn: {
        color: 'white',
        image: "WhiteKnight",
        moves: MOVES.knight
    },
    BB: {
        color: 'black',
        image: "BlackBishop",
        moves: MOVES.bishop,
    },
    WB: {
        color: 'white',
        image: "WhiteBishop",
        moves: MOVES.bishop,
    },
    BQ: {
        color: 'black',
        image: "BlackQueen",
        moves: MOVES.queen
    },
    WQ: {
        color: 'white',
        image: "WhiteQueen",
        moves: MOVES.queen
    },
    BKi: {
        color: 'black',
        image: "BlackKing",
        moves: MOVES.king
    },
    WKi: {
        color: 'white',
        image: "WhiteKing",
        moves: MOVES.king
    },
    BP: {
        color: 'black',
        image: "BlackPawn",
        moves: MOVES.blackPawn
    },
    WP: {
        color: 'white',
        image: "WhitePawn",
        moves: MOVES.whitePawn
    },
}