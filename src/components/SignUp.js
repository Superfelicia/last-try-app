import {useState} from 'react';

let array = []

const SignUp = ({handleSubmit, bio, name, setName, email, setEmail, password, setPassword}) => {

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    handleSubmit = (e) => {
        e.preventDefault();

        if (name === undefined || email === undefined || password === undefined) {
            setError(true);
        } else {
            let user = {name: name, email: email, password: password, bio: ''}
            setSubmitted(true);
            setError(false);
            array.push(user)
            console.log(array)
            localStorage.setItem("accounts", JSON.stringify(array))
            console.log(localStorage)
        }
    };

    const successMessage = () => {
        return (
            <div className="success" style={{
                display: submitted ? {name} : 'none',
            }}>
                <h1>User {name} successfully registrered!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="error" style={{
                display: error ? '' : 'none',
            }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    function setName(e){
        name = e
    }

    function setEmail(e){
        email = e
    }

    function setPassword(e){
        password = e
    }

    return (
        <div className="form">

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form onSubmit={handleSubmit}>
               <div className="field">
                   <label>Name:</label>
                   <input
                   type="text"
                   className="form-control"
                   placeholder="Enter name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                   />
                </div>
                <div className="field">
                    <label className="form-label">Email:</label>
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="field">
                    <label className="form-label">Password:</label>
                    <input 
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button onClick={handleSubmit} className="btn">
                    Log in
                </button>
            </form>
        </div>  
    );
};

export default SignUp;