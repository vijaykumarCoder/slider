import { Carousel } from 'react-bootstrap'
import one from '../Images/one.jpg'
import two from '../Images/two.png'
import three from '../Images/three.png'
const Slide = () =>{
    return (
        <Carousel nextLabel={false} prevLabel={false}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100" 
      src={one}
      alt="First slide"
      width="200px"
      height="300px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={two}
      alt="Second slide"
      width="200px"
      height="300px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={three}
      alt="Third slide"
      width="200px"
      height="300px"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slide