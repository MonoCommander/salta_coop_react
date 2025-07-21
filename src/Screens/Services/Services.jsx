import React from "react";

const Services = () =>{
return(
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
        <section class="py-5">
                <div class="container px-5 mb-5">
                    <div class="text-center mb-5">
                        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Servicios</span></h1>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-11 col-xl-9 col-xxl-8">
                            <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">Internet</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                        </div>
                                        <img class="img-fluid" src="/routerimg.jpg" width="300px" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; Lambda Software Desing and Development</div>
                        </div>
                        <div className="col-auto">
                            <a className="small" href="https://github.com/Lambda-Software-Desing-Dev?tab=repositories">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
    </main>
)
}

export default Services;