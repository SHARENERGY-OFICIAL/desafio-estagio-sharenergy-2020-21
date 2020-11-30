import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import nodeapi from "../../services/nodeapi";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    error: "",
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    if (!name || !email || !password || !password2) {
      this.setState({ error: "Preencha todos os dados para se cadastrar." });
    } else if (!(password === password2)) {
      this.setState({ error: "As senhas precisam ser iguais." });
    } else {
      try {
        await nodeapi
          .post("/novoUsuario", {
            name,
            email,
            password,
            password2,
          })
          .then((response) => {
            console.log(response);
            this.props.history.push("/");
          })
          .catch((err) => {
            console.log(err);
            this.props.history.push("/signup");
          });
        
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirme a sua senha"
            onChange={(e) => this.setState({ password2: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
