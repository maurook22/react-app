import { useState } from 'react'
import axios from "axios"

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    }

    const onSubmitForm = e => {
        e.preventDefault();
        login(form);;
    }

    function login(form) {

        axios.post("http://localhost/api-sanctum/public/api/login", form)
            .then(response => response.data)
            .then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error.response.data.message)
            })
    }

    return (
        <>
            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9 mt-5">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0 mt-5">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                                            </div>
                                            <form className="user" onSubmit={onSubmitForm}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        aria-label="Email field"
                                                        className="form-control form-control-user"
                                                        placeholder="Ingrese email..."
                                                        name="email"
                                                        onChange={onUpdateField}
                                                        value={form.email}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        aria-label="Password field"
                                                        className="form-control form-control-user"
                                                        placeholder="Ingrese contraseña"
                                                        name="password"
                                                        onChange={onUpdateField}
                                                        value={form.password}
                                                    />
                                                </div>
                                                {/* <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div> */}
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Ingresar
                                                </button>

                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Olvidó la contraseña?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Crear nueva cuenta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login