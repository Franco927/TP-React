import Carousel from 'react-bootstrap/Carousel';



const CarouselHome = () => {

    return (
        <Carousel>


            <Carousel.Item> 
                <img
                className='d block w-100'
                style={{maxHeight:"500px", objectFit: 'cover',maxWidth:"100%"}}
                src="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1"/>    
                <Carousel.Caption>
                <h3>Ofertas del día</h3>
                <p>Las mejores ofertas exclusivas para nuestros clientes</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item> 
            <img
                className='d block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2"/>              
                <Carousel.Caption>
                <h3>Mejores Productos</h3>
                <p>Los productos más vendidos y mejor valorados</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img
                className='d block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3"/> 
                <Carousel.Caption>
                <h3>Nuevos Productos</h3>
                <p>
                    Productos recién presentados en el mercado ya disponibles en nuestra tienda
                </p>
                </Carousel.Caption>
            </Carousel.Item>


    </Carousel>
    )

}

export default CarouselHome