import {signInWithGooglePopup, createUserDocFromAuth} from "../../utils/firebase/firebase.util"
import SignUpForm from '../../components/sign-up/sign-up-form.component'
function SignIn() {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response)
        const userDocRef = createUserDocFromAuth(user);
    }

    return (
        <div>
            <h1>
                Sign In page
            </h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
        </div>
    )

}

export default SignIn;