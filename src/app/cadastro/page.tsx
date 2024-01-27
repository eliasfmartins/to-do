'use client'
import { Header } from "../components/Header";
const darOi = () => {
    console.log('Oiee')
}
const myArray = [1, 2, 3, 4, 5, 6]
export default function cadastro() {
    return (
        <div>

            {myArray.map((numero) => {
                return <p key={numero}>meu numero e {numero}</p>
            })}
        </div>
    )
}