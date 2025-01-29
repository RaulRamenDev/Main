import { AboutUs } from './components/AboutUs.jsx';
import { Header } from './components/Header.jsx'
import { Slider } from './components/Slider.jsx'

export function App () {

    const sliderImages = [
        'slide0',
        'slide1',
        'slide2',
        'slide3',
    ];

    return(
        <>
            <Header
                isLogged={false} 
            />

            <Slider 
                images={sliderImages} numSlides={4}
            />

            <AboutUs/>
        </>
    )
}