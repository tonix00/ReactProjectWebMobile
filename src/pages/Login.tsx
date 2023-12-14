import React, { FormEvent, useState } from 'react';
import '../assets/styles/app.scss'

const onLogin =(email:string, password:string)=>{
    console.log("login:",email," password:",password)
}

const Login: React.FC = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        // Perform authentication logic here
        onLogin(email, password);
    
        // You can add further logic, such as sending data to a server for authentication
    };

  return (
    <div className='login'>
      <div className='container'>
      <form onSubmit={handleSubmit} className='login_form'>
      <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <center>
        <button type="submit" className='btn_primary'>Login</button>
        </center>
      </form>
      </div>
    </div>
  )
}

export default Login