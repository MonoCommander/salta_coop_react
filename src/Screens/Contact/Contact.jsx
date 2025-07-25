import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_NAME,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then((result) => {
                console.log(result.text);
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
                document.getElementById("submitErrorMessage").classList.add("d-none");
                form.current.reset();
            }, (error) => {
                console.log(error);
                document.getElementById("submitErrorMessage").classList.remove("d-none");
                document.getElementById("submitSuccessMessage").classList.add("d-none");
            });
    };

    return (    
        <main>  
            <nav nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        </ul>
                   </div>
                </div>
            </nav> 
        <section className="py-5">
            <div className="container px-5">
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Contactanos</h1>
                        <p className="lead fw-normal text-muted mb-0">Dejanos un mensaje</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">                              
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" name="user_name" type="text" placeholder="Enter your name..." required />
                                    <label htmlFor="name">Nombre Completo</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" name="user_email" type="email" placeholder="name@example.com" required />
                                    <label htmlFor="email">Casilla de e-mail</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" name="user_phone" type="tel" placeholder="(123) 456-7890" required />
                                    <label htmlFor="phone">Numero de Telefono</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" name="message" placeholder="Enter your message here..." style={{height: "10rem"}} required></textarea>
                                    <label htmlFor="message">Mensaje</label>
                                </div>

                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Mensaje enviado con Exito!</div>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">¡Error al enviar mensaje!</div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0"><code>&#x1f16d; 2025 Mono_Commander. MIT License.</code></div>
                    </div>
                    <div className="col-auto">
                        <a className="small" href="mailto:mono.commander@gmail.com">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </main>
        
    )
}

export default Contact;