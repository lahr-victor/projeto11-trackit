import axios from "axios";
import React from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import { BASEURL } from "../../constants/urls";
import { Loading } from "../../components/Loading";

import imgLogo from "../../assets/images/logo.png";

export function SignUpPage() {
    const [form, setForm] = React.useState({ email: "", password: "", name: "", image: "" });
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();

    function userSignUp(event) {
        event.preventDefault();
        setIsLoading(true);

        axios.post(`${BASEURL}/auth/sign-up`, form)
            .then((response) => {
                navigate("/");
            })

            .catch((error) => {
                alert(error.response.data.message);
                setIsLoading(false);
            });
    }

    function handleForm(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <Container>
            <h1>
                <img src={imgLogo} alt="TrackIt logo" />
            </h1>
            <form onSubmit={userSignUp}>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={handleForm}
                    disabled={isLoading}
                    data-test="email-input"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="senha"
                    value={form.password}
                    onChange={handleForm}
                    disabled={isLoading}
                    data-test="password-input"
                />
                <input
                    name="name"
                    type="text"
                    placeholder="nome"
                    value={form.name}
                    onChange={handleForm}
                    disabled={isLoading}
                    data-test="user-name-input"
                />
                <input
                    name="image"
                    type="text"
                    placeholder="foto"
                    value={form.image}
                    onChange={handleForm}
                    disabled={isLoading}
                    data-test="user-image-input"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    data-test="signup-btn"
                >
                    {isLoading ? <Loading /> : "Cadastrar"}
                </button>
            </form>
            <Link to="/" data-test="login-link">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 70px 35px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: auto;
    }

    form {
        width: 300px;
        margin-top: 35px;
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            height: 45px;
            margin-bottom: 6px;
            padding: 10px;
            background-color: #FFFFFF;
            font-weight: 400;
            font-size: 20px;
            color: #666666;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            outline: none;

            &::placeholder {
                color: #D4D4D4;
                opacity: 1;
            }

            &:disabled {
                background-color: #F2F2F2;
                color: #B3B3B3;
            }
        }

        button {
            width: 100%;
            height: 45px;
            background-color: #52B6FF;
            font-weight: 400;
            font-size: 20px;
            color: #FFFFFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;

            &:disabled {
                opacity: 0.7;
                cursor: initial;
            }
        }
    }

    p {
        margin-top: 25px;
        font-weight: 400px;
        font-size: 14px;
        color: #52B6FF;
        text-align: center;
    }

    a {
        text-decoration: underline;
        text-decoration-color: #52B6FF;
    }
`;