import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../App";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [islogin, setIslogin] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!e.target.email.value) {
            alert("Email obligatorio");
        } else if (!e.target.email.value) {
            alert("Email no valido");
        } else if (!e.target.password.value) {
            alert("Contraseña Obligatoria");
        } else if (e.target.email.value === "examen@ejemplo.com" && e.target.password.value === "examen"){
            navigate('/')
            setEmail(e.target.email.value);
            setIslogin(true)
            e.target.email.value = "";
            e.target.password.value = "";
        } else {
            alert("Email o contraseña incorrectos");
        }
    }

    return (
        <div className="login">
            <h1>Form Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button>LogIn</button>
            </form>
                <Link to='/'>
                    <button>Home</button>
                </Link>
        </div>
    )
}

