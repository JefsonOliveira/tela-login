import "./styles.css";

function Login() {
  return (
    <div className="template">
      <div className="container">
        <h1 className="title">Login</h1>
        <div className="line"></div>

        <div className="containerInput">
          <h4>Seu e-mail</h4>
          <input type="text" className="email" placeholder="contato@htmlecsspro.com" />
          <h4>Sua senha</h4>
          <input className="passWord" type="password" placeholder="1234" />
        </div>
        <div className="checkLogado">
            <input
              className="inCheckLogado"
              type="checkbox"
            />{" "}
            Manter-me logado
        </div>
        <div className="buttonLogar">
          <button className="logar" type="submit" onClick={() => alert("Clicou")}>
            <h2>Logar</h2>
          </button>
        </div>
        <div className="containerCadastre">
          <div>
              Ainda não tem conta?{" "}
              <button className="cadastre" type="submit" onClick={() => alert("Clicou")}> 
                Cadastre-se
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
