import { MouseEventHandler } from "react";

interface Props {
    value: string
    onSquareClick: MouseEventHandler<HTMLButtonElement>
}

function Square({value, onSquareClick}: Props) {
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default Square;