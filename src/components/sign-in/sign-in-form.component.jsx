import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import './sign-in-form.style.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const resetForm = () => {
        setFormFields(defaultFormFields)
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetForm()
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    alert("incorrect password for email")
                    break
                default:
                    console.log(error)
            }
        }
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        
        const userDocRef = createUserDocFromAuth(user);
        console.log(userDocRef)
    };

    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and passward</span>
            <form  onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    required
                    type="email"  
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                 />

                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </div>

                

            </form>
        </div>
    )
}

export default SignInForm