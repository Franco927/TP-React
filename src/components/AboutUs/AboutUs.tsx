
const AboutUs = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-auto">
                <br />
                <h2> ¿Quienes Somos? </h2>
                <p>  Somos la empresa de venta online de tecnología número uno en el mundo
                </p>
                <br/>
                
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://t3.ftcdn.net/jpg/05/44/71/62/240_F_544716203_PkX2ZAij0YWqvgDpd8P8bF32zTSxzO1K.jpg" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> PC de Escritorio </div>
                        <p className="card-text">
                        Computadoras ensambladas y componentes 
                        </p>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://pemmzchannel.com/wp-content/uploads/2022/03/laptop-biasa-vs-laptop-gaming.jpeg" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Notebooks</div>
                        <p className="card-text">
                        Notebooks para todo tipo de usuarios
                        </p>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://t3.ftcdn.net/jpg/05/56/90/88/240_F_556908806_uh9wvpQp9EteB3ImMhqtai4fweBu0C9V.jpg" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Periféricos </div>
                        <p className="card-text">
                        Teclados, mouse, headsets, monitores, y mucho más
                        </p>
                    </div>  
                </div>
            </div>

        </div>



    </div>
  );
};

export default AboutUs;
