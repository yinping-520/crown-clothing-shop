import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.util";
import './sign-up-form.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
        // Easier to understand: 
        //  // Get the name and value from the input field that triggered the event
        //  const inputName = event.target.name;   // Name of the input field (e.g., 'email')
        //  const inputValue = event.target.value; // The current value typed into that field
 
        //  // Create a new object to hold the updated form field values
        //  const updatedFormFields = {
        //      displayName: formFields.displayName,  // Keep the current displayName value
        //      email: formFields.email,              // Keep the current email value
        //      password: formFields.password,        // Keep the current password value
        //      confirmPassword: formFields.confirmPassword // Keep the current confirmPassword value
        //  };
 
        //  // Now update only the field that changed
        //  updatedFormFields[inputName] = inputValue;
 
        //  // Finally, set the new form fields state
        //  setFormFields(updatedFormFields);
    }

    const resetForm = () => {
        setFormFields(defaultFormFields)
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        // passward and confirm password are the same
        if(confirmPassword !== password) {
            alert("password do not match")
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {displayName});
            resetForm()
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert('Can not create user, email already in use')
            } else {
                console.log(`user creation encountered an error`,  error)
            }
           
        }
    };

    return(
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign up with your email and pw</span>
            <form className = "form-input" onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name"
                    type="text"  
                    required
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                    />
                
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

                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;