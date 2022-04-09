import React from 'react';
import { Link } from "react-router-dom"



export default function Login(){
    const[logindata,setlogindata]=React.useState({})
    
    function monitorlogindata(event) {
        const { name, value, type } = event.target
        setlogindata(prevformdata => {
            return { ...prevformdata,[name]:value }
        }
        
        )}


        let verify=""
        function verifyuser(){
        
        let users = localStorage.getItem("users");
        let userdata=JSON.parse(users);
        if(logindata.email===userdata.email&&logindata.password===userdata.password) {
            let verify="true"
            
        }else{alert('incorrect id or password')}
        verify="false"
    }


     
    



    return (<><form>
        <div id="login">
            <div className="card" style={{ width: "50rem", height: "30rem" }} >
                <h1>Login </h1>

                <div className="card-body"  >
                    <div className="bodyparts">
                        <label  className="form-label"><strong>Email address</strong></label>
                        <input type="text" className="form-control"  placeholder="Email Address or Phone Number. " name="email" value={logindata.value} onChange={monitorlogindata} />
                    </div>

                    <div className="bodyparts">
                        <label  className="form-label"><strong>Enter password</strong></label>
                        <button type="button" className="btn btn-link "  >Forget password?</button>
                        <input type="password" className="form-control"  placeholder="Enter Your Password."name="password" value={logindata.value} onChange={monitorlogindata} />
                    </div>
                    <div className="bodyparts">
                        <Link className="btn btn-primary"onClick={verifyuser} to="/Useraccount" >Login</Link><br />
                    </div>

                    <strong>Don't have an account.</strong><Link className="nav-link" to={verify? "/SignUp":"/"}  >SignUp</Link>
                </div>


            </div>
        </div>
        </form>


    </>
    )



}