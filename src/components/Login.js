const Login = ({handleSubmit, email, setEmail, password, setPassword}) => {

    handleSubmit = (e) => {
       e.preventDefault();
       var x = localStorage.getItem('accounts')
       var userArray = JSON.parse(x)

       for (let i = 0; i < userArray.length; i++) {
           if (email === userArray[i].email && password === userArray[i].password){
               console.log(userArray)
               console.log('success')
           
           } else if (email === userArray[i].email && (password !== userArray[i])){
               console.log('lol')
           };
         };
    };

     function setEmail(e){
         email = e
     };

     function setPassword(e){
         password = e
     };

   return (
       <form onSubmit={handleSubmit}>
           <div className="field">
               <label>Email:</label>
               <input
               type="email"
               className="form-control"
               placeholder="Enter email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
           </div>

           <div className="field">
               <label>Password</label>
               <input 
               type="password"
               className="form-control"
               placeholder="Enter password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
           </div>

           <button className="btn">
               Log in
           </button>
       </form>
   );
};

export default Login;