import {useCallback} from "react";
import Button from "@material/react-button";

const handleSubmit = async (evt) => {
    evt.preventDefault();

    /* Call Login APIs */
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const formData = new FormData();

    formData.set("username", username);
    formData.set("password", password);

    const authenticate = await fetch("/api/login", {
        method: "POST",
        body: formData
    }).then(result => {
       return result.text();
    })
    
    console.log(authenticate);

}

const inputComponent = () => {
    const autoFocus = useCallback(el => el ? el.focus(): null, []);
    return autoFocus;
}

const MyAppLogin = () => {
    return(
        <div className="wrapper-form">
            <form className="login-form" method="POST" action="/api/login" onSubmit={handleSubmit}>
                <h1 className="form-title">LOGIN</h1>
                <input type="text" name="username" placeholder="Username" className="username" ref={inputComponent()}/>
                <input type="password" name="password" placeholder="Password" className="password"/>
                <Button raised outlined id="loginButton">LOGIN</Button>
            </form>

            <style jsx>{`
                .wrapper-form {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                
                .login-form {
                    display: flex;
                    flex-direction: column;
                }

                .form-title {
                    font-family: "NanumGothic-ExtraBold";
                    font-size: 1.3rem;
                    margin-bottom: 30px;
                }

                .username, .password {
                    height: 37px;
                    margin-bottom: 12px;
                    width: 30vh;
                    font-family: sans-serif;
                    background-color: rgb(230, 230, 230);
                    border: none;
                    padding: 7px 25px;
                }
            `}</style>
        </div>
    )
}

export default MyAppLogin;