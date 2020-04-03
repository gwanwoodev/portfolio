import Button from "@material/react-button";

const MyAppLogin = () => {
    return(
        <div className="wrapper-form">
            <form className="login-form" method="POST" action="/api/login">
                <h1 className="form-title">LOGIN</h1>
                <input type="text" name="username" placeholder="Username" className="username"/>
                <input type="password" name="password" placeholder="Password" className="password"/>
                <Button raised outlined id="loginButton">LOGIN</Button>
            </form>

            <style jsx>{`
                html, body {
                    height: 100%;
                }

                .wrapper-form {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                
                .login-form {
                    display: flex;
                    flex-direction: column;

                }
            `}</style>
        </div>
    )
}

export default MyAppLogin;