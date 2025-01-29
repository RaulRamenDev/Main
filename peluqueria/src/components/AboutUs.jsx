import './AboutUs.css'
import map from '../assets/img/map.png'

export function AboutUs(){
    return(
        <section className='about-main'>
            <div className='about-main-text1'>
                En nuestra peluquería, nos especializamos en mantener vivas las técnicas tradicionales 
                que realzan la belleza natural  de cada persona. Con una atención meticulosa y productos de calidad,
                 ofrecemos cortes y estilos clásicos que reflejan la elegancia de lo atemporal. 
                 Aquí, cada visita es una experiencia de cuidado personalizado, donde la tradición 
                 se combina con la pasión por el arte del buen peinado.
            </div>

            <a className='about-main-link1' href="" >
                Pide ya tu cita
            </a>

            <div className='about-main-text2'>
                O puedes visítarnos
            </div>      
                  
            <a className='about-main-link2' href="">
                P.º de San Jose 126, 35015 Las Palmas de Gran Canaria, Las Palmas
            </a>
            <img className='about-main-map' src={map} alt="" />
            
        </section>
    )
}