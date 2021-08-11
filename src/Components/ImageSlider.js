import { Carousel } from 'react-bootstrap'
import one from '../Images/one.jpg'
const ImageSlider = () =>{
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={one} width="200px" height="200px" alt="one" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider