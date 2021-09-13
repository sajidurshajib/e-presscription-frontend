import classes from './Register.module.css'

const Register = () => {
    return (
        <div className={classes.Register}>
            <div className={classes.formDiv}>
                <h3>Signup in to e-prescription</h3>
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
                        <label htmlFor="confirm_password">Confirm password:</label>
                        <input id="confirm_password" type="confirm_password" placeholder="*******" />
                    </div>
                    <div className={classes.inputDiv}>
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
