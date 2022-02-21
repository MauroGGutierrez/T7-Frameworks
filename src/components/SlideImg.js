import React from 'react'
import { Button, Carousel } from 'react-bootstrap';
import imagen1 from "../img/calzas.jpg"
import imagen2 from "../img/remeras.jpg"
import imagen3 from "../img/voley.jpg"

const SlideImg = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="w-100 rounded mx-auto d-block"
      src={imagen1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 class="text-light bg-dark">CALZAS PARA MUJERES</h2>
      <h3 class="text-light bg-dark">¡Ultimos modelos!</h3>
      <Button variant="danger">SABER MAS</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100 mx-auto d-block"
      src={imagen2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 class="text-light bg-dark">REMERAS SUBLIMADAS</h2>
      <h3 class="text-light bg-dark">Realizados recientemente</h3>
      <Button variant="danger">SABER MAS</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="rounded mx-auto d-block w-100"
      src={imagen3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 class="text-dark bg-light">Remeras sublimadas para tu equipo</h2>
      <h3 class="text-dark bg-light">Realizados recientemente</h3>
      <Button variant="danger">SABER MAS</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default SlideImg