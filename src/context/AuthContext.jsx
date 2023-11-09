import { auth } from '../main.jsx'
import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

export const authContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
    }

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }

    const [user, setUser] = useState(null)

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => suscribed()
    }, [])

    return (
        <authContext.Provider value={{ register, login, loginWithGoogle, logout, user }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;