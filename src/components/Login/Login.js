import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.Login}>
            <div className={classes.formDiv}>
                <h3>Sign in to e-prescription</h3>
                <form action="">
                    <div className={classes.inputDiv}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" placeholder="jhon@doe.com" />
                    </div>
                    <div className={classes.inputDiv}>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" placeholder="*******" />
                    </div>
                    <div className={classes.inputDiv}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
