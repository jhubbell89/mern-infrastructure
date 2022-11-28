import SignUpForm from "../../components/signupform/SignUpForm"
import { useState } from "react";
import LoginForm from '../../components/loginform/LoginForm'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
      <main>
        <h1>AuthPage</h1>
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
        }
      </main>
    );
  }