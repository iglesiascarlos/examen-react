import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../App";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const emailIsValid = /\S+@\S+\.\S+/.test(email);
        const passwordIsValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

        if (emailIsValid && passwordIsValid) {
            if (!e.target.email.value) {
                alert("Email obligatorio");
            } else if (!e.target.email.value) {
                alert("Email no valido");
            } else if (!e.target.password.value) {
                alert("Contraseña Obligatoria");
            } else if (e.target.email.value === "examen@ejemplo.com" && e.target.password.value === "Examen1234"){
                navigate('/')
                setEmail(e.target.email.value);
                e.target.email.value = "";
                e.target.password.value = "";
            } else {
                alert("Email o contraseña incorrectos");
            }
        } else {
            alert('el email o la contraseña no cumplen los requisitos')
        }
    }



    return (
        <div className="login">
            <h1>Form Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
                <button>LogIn</button>
            </form>
                <Link to='/'>
                    <button>Home</button>
                </Link>
        </div>
    )
}

