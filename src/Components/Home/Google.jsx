import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import {useNavigate} from 'react-router-dom'

function Google() {

    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })

                console.log(res.data)
            } catch (err) {
                console.log(err)

            }

        }
    });

    return (
        <div className="mb-8">
            <header className="App-header">
                <button onClick={login}>
                    <i class="fa-brands fa-google"></i>
                    
                </button>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse.credential);
                        var decoded = jwt_decode(credentialResponse.credential);
                        console.log(decoded)
                        navigate('/dashboard')
                    }}
                    
                    size='medium'
                    onError={() => {
                    console.log('Login Failed');
                }}/>
                
            </header>
        </div>
    );
}

export default Google;
