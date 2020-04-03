import Button from "@material/react-button";

const goLogin = (evt) => {
    evt.preventDefault();

    /* Call Login APIs */

}

const MyAppLogin = () => {
    return(
        <div className="wrapper-form">
            <form className="login-form" method="POST" action="/api/login">
                <h1 className="form-title">LOGIN</h1>
                <input type="text" name="username" placeholder="Username" className="username"/>
                <input type="password" name="password" placeholder="Password" className="password"/>
                <Button raised outlined id="loginButton" onClick={goLogin}>LOGIN</Button>
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