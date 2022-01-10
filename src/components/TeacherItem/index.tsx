import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'
export function TeacherItem (){
    return (
<>
        <article className="teacher-item">
        <header>
            <img src="https://avatars.githubusercontent.com/u/13791385?v=4" alt="Mario Souto" />
            <div>
                <strong>Mario Souto</strong>
                <span>Matemática</span>
            </div>
        </header>
        <p>
            Cras ac lorem posuere, cursus lectus non, rhoncus metus.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet est quis nunc venenatis, sed blandit urna scelerisque. Fusce vitae diam aliquet, pharetra nibh sed, laoreet tellus. Vestibulum eu magna sollicitudin, lacinia mi at, cursus lacus. Integer efficitur sem id nulla blandit, eget auctor felis convallis.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type='button'>
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>


<article className="teacher-item">
<header>
    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Diego Fernandes" />
    <div>
        <strong>Diego Fernandes</strong>
        <span>Física</span>
    </div>
</header>
<p>
    Cras ac lorem posuere, cursus lectus non, rhoncus metus.
    <br /> <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet est quis nunc venenatis, sed blandit urna scelerisque. Fusce vitae diam aliquet, pharetra nibh sed, laoreet tellus. Vestibulum eu magna sollicitudin, lacinia mi at, cursus lacus. Integer efficitur sem id nulla blandit, eget auctor felis convallis.
</p>

<footer>
    <p>
        Preço/Hora
        <strong>R$ 90,00</strong>
    </p>
    <button type='button'>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
    </button>
</footer>
</article>
</>
    )
}