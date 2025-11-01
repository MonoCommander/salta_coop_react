import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../components/Footer';

const Home = () =>{
    return(
        <main className= "flex-shrink-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="/COSEBYL.jpg" alt="coop logo" width="50px"/>
                    <a className="navbar-brand" ><span className="fw-bolder text-primary"> Cooperativa Cosebyl</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="/about">Cooperativa</a></li>
                            <li className="nav-item"><a className="nav-link" href="/services">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section>   
                <img src="/Quebrada_cafayate.jpeg" alt="background mountain" width="100%" />
            </section>

            <Footer />
        </main>
    )
}

export default Home;