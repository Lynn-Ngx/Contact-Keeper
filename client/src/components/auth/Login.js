import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        setUser({...user, [e.target.name]: user.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()

        console.log('Login Submit')
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email Address </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input className='btn btn-primary btn-block' type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login