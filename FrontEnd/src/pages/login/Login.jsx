import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">DeathNote</h3>
                <span className="loginDesc">
                    Connect With Friends and the World around you on DeathNote.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginbox">
                    <input placeholder="Email"  className="loginInput" />
                    <input placeholder="Password"  className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forget Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
