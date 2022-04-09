import React from 'react'
import { Link } from "react-router-dom"



export default function SignUp() {
    const [formdata, setformdata] = React.useState({ })

    function monitorfillups(event) {
        const { name, value, type } = event.target
        setformdata(prevformdata => {
            return { ...prevformdata,[name]:value }
        }
        
        )}

console.log(formdata)

let login=""
function forwardtolocal(){
    if(formdata.fullname!=null&& formdata.email!=null&&formdata.password!=null){
        
        localStorage.setItem("users", JSON.stringify(formdata));
        let login="true"
        alert("you have succesfully signup")
    }
    else{
        let login="false"
        alert("all fields are necessary")
    }

}





    return (


        <div id="signup">

            <div className="card" style={{ width: "50rem", height: "32rem" }}>

                <div className="card-body">
                    <h1>Sign UP! <br /></h1>
                    <p>it's quick and easy.</p>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control bodyparts" placeholder="Enter Your Full Name." name="fullname" value={formdata.value} onChange={monitorfillups} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control bodyparts" placeholder="Enter Your Email Address" name="email" value={formdata.value} onChange={monitorfillups}/>

                    </div>

                    <div className="input-group mb-3">
                        <input type="password" className="form-control bodyparts" placeholder="Enter New Password."name="password" value={formdata.value} onChange={monitorfillups} />

                    </div>

                    <Link className="btn btn-primary bodyparts" to={login? "":"/SignUp"}  onClick={forwardtolocal}>Submit</Link>
                    
                </div>
            </div>
        </div>






    )



}