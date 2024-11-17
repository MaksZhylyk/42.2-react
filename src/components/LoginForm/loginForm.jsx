import Input from '../Input/input';
import Button from '../button/button';
import './loginForm.css';

function LoginForm(){
    return(
        <div className='main-container'>
            <h1>Login form</h1>
            <Input 
            label="E-mail"
            name="email" 
            type="email" 
            placeholder="Enter your e-mail"
            />
            <Input 
            label="Password"
            name="password" 
            type="password" 
            placeholder="Enter your password"
            />
            <Button name="Login" type="submit"/>
        </div>
    );
}

export default LoginForm;