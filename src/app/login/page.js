import Header from "@/components/layout/Header"
import Button from "@/components/utils/Button"

const Login = () => {
  return (
    <>
    <Header/>
      <div id='login-wrapper'>
        <img src="https://www.caraguatatuba.sp.gov.br/pmc/wp-content/themes/awesomepmc/assets/img/logo-dark.png" alt="Prefeitura Municipal de Caraguá"/>
        <form>
          <input type="text" id="protocolo" placeholder="Protocolo"/>
          <input type="text" id="senha" placeholder="Senha"/>
          <p>Esqueceu sua senha?</p>
        </form>
        <Button title="Login" href={'/home'}/>
      </div>
    </>
  )
}

export default Login