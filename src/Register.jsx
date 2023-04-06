import React, { useState } from "react"

export const Register = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        alert("You have successfully logged in " + email)

    }

    return (
        <div className="auth-form-container">
<form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email"/>
<label htmlFor="password">Email</label>
<input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="************" id="password" name="password"/>
<label htmlFor="name">Fullname</label>
<input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="Fullname" id="name" name="name"/>
<button type="submit">Log In</button>

</form>
<button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Register here.</button>
        
   </div>     
            )
        }