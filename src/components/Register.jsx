import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <div className="vh-100" style={{backgroundColor: '#dfc8a9'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Registrarse</h3>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeTextX-2" className="form-control form-control-lg" />
                                        <label htmlFor="typeTextX-2" className="form-label">Nombre</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeTextX-2" className="form-control form-control-lg" />
                                        <label htmlFor="typeTextX-2" className="form-label">Apellido</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg"/>
                                        <label htmlFor="typeEmailX-2" className="form-label">Email</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control" form-control-lg />
                                        <label htmlFor="typePasswordX-2" className="form-label">Contraseña</label>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Registrarse</button>
                                    <hr />
                                    <Link to="/Login" className="btn btn-secondary btn-lg btn-block">Iniciar Sesión</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}