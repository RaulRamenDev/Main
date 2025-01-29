import './Slider.css'
import React from 'react';

const slides = require.context('../assets/img',true);


export function Slider({images, numSlides}){
const [actualSlide,setActualSlide] = React.useState(0);
const nextSlide = ()=>{
    setActualSlide(actualSlide === numSlides-1 ? 0 : actualSlide+1)
}
const prevSlide = ()=>{
    setActualSlide(actualSlide === 0 ? numSlides-1 : actualSlide-1)
}
    return(
        <section className="sld">
            {images.map((image,index) =>{
                return <div className="sld-slide">{actualSlide === index &&(
                    <img key={index} src={slides(`./${image}.jpg`)} alt="imagen"/>
                )}
                    
                </div>
            })}

            <a className="prev" onClick={prevSlide}>&#10094;</a>

            <a className="next" onClick={nextSlide}>&#10095;</a>
        </section>
    )
}