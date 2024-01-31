import Image from 'next/image'
import './style.css'
export const Header = () => {

    return (
        <header>
            <a href=""><Image alt='logo' src={"logo.svg"} width={180} height={40} /></a>
            <a href="">
                <h2 className='wellcome'>
                    Bem-vindo de volta, meu Consagrado {' "----"'}
                </h2>
            </a>
            <p className='data'>Segunda,22 de dezembro de 2023</p>
        </header>
    )
}