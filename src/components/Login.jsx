import { useContext, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { authContext } from '../context/AuthContext';

const Login = () => {

    const { register, login, loginWithGoogle, user, logout } = useContext(authContext)

    const [emailRegister, setEmailRegister] = useState("")
    const [passowrdRegister, setPasswordRegister] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (user && user.displayName) {
            console.log('User Display Name:', user.displayName);
        }
    }, [user]);

    const handleRegister = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailRegister)) {
            alert("Invalid email format");
            return;
        }

        register(emailRegister, passowrdRegister);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
    }

    const handleGoogle = (e) => {
        e.preventDefault()
        loginWithGoogle()
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <form className='container-login'>
                <h3>Register</h3>
                <input onChange={(e) => setEmailRegister(e.target.value)} type="email" placeholder='Email...' />
                <input onChange={(e) => setPasswordRegister(e.target.value)} type="password" placeholder='Password...' />
                <div>
                    <Button onClick={(e) => handleRegister(e)}>Submit</Button>
                </div>
            </form>
            <form className='container-login'>
                <h3>LogIn</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email...' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password...' />
                <div>
                    <Button onClick={(e) => handleLogin(e)} style={{ marginRight: '1rem' }}>Submit</Button>
                    <Button onClick={(e) => handleGoogle(e)} className='btn-danger'>Google</Button>
                </div>
            </form>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                {user && user.displayName && (
                    <>
                        <h6>Welcome, {user.displayName}!</h6>
                        <Button onClick={() => handleLogout()} className='btn-danger'>Logout</Button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login