import classes from "./Form.module.css"
import logo from "../I_care.jpg";

export function Form() {
    return (
        <div>
            <img className="logo" src={logo} alt="Logo" />
        <form className={classes.form}>
            <div className={classes.control}>
                <label>Full name</label>
                    <input type='text' />
            </div>
            <div className={classes.control}>
                <label>Email address</label>
                    <input type='url'/>
            </div>
            <div className={classes.control}>
                <label>Home address</label>
                    <input type='text'/>
            </div>
            <div className={classes.control}>
                <label>Phone number</label>
                    <textarea id='description'></textarea>
            </div>
            <div className={classes.actions}>
                <button>Register with us</button>
            </div>
        </form>
        </div>
    );
  }
  