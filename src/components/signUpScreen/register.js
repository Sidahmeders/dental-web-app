import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/register/register.css';


function Register() {

    return (
        <div className="register-page">
            <div className="background-image"></div>
            <div className="image-div">
                <span className="logo"></span>
                <p>Register</p>
            </div>
            <div className="register-forms-div">
                <form>
                    <div>
                        <label>Nom</label>
                        <input type="text" name="nom" placeholder="nom"/>
                    </div>
                    <div>
                        <label>Prenom</label>
                        <input type="text" name="prenom" placeholder="prenom"/>
                    </div>
                    <div>
                        <label>Birth</label>
                        <input type="text" name="birth-date" placeholder="birth date y/m/d"/>
                    </div>
                    <div>
                        <label>Branch</label>
                        <input type="text" name="branch" placeholder="department"/>
                    </div>
                    <div>
                        <label>label1</label>
                        <input type="text" name="label1" placeholder="label1"/>
                    </div>
                    <div>
                        <label>label2</label>
                        <input type="text" name="label2" placeholder="label2"/>
                    </div>
                    <div>
                        <label>label3</label>
                        <input type="text" name="label3" placeholder="label3"/>
                    </div>
                    <button>Register</button>
                </form>
                <div className="login-link-btn">
                    <p>have account</p>
                    <Link to="/">
                        login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
