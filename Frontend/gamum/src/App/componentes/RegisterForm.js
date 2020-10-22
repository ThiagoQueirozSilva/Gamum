import React from 'react'
import '../styles/modal.css'

export default class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            completeName: '',
            email:'',
            userName: '',
            password: '',
            error: '',
        }
        
    }
    onCompleteNameChange = (e) => {
        const completeName = e.target.value
        this.setState(() => ({ completeName }));
    }

    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    onUserNameChange = (e) => {
        const userName = e.target.value
        this.setState(() => ({ userName }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        let {completeName,email,userName,password} = this.state
        if(completeName && email && userName && password){
            //adiciona ao banco
        } else {
            this.setState(() => ({error: 'Por favor preencha todos os campos'}))
        }

    }

    render () {
        return(
        <div>
         {this.state.error && <p className="warning">{this.state.error}</p>}
         <form onSubmit={this.onSubmit}>
            <h1 className="modal-title">Cadastre-se</h1>
            <input className="input-form" type='text' onChange={this.onCompleteNameChange} placeholder='Digite o seu nome completo' value={this.state.completeName}/>
            <input className="input-form" type='text' onChange={this.onEmailChange} placeholder='Digite seu email' value={this.state.email}/>
            <input className="input-form" type='text' onChange={this.onUserNameChange} placeholder='Digite seu username' value={this.state.userName}/>
            <input className="input-form"onChange={this.onPasswordChange} placeholder='Digite sua senha' value = {this.state.password}/>

            <button variant="contained" size="large" color="primary">
               CADASTRAR
            </button>

         </form>
        </div>
        )
    }
}