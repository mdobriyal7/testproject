import React from 'react'
import {Link} from 'react-router-dom'



export default function Useraccount(){
return(

<>
<h1>hurray welcome user!!! this is a very simple login page which uses localhost to store your id and password and then again can used for  login verification </h1>
<Link className="btn btn-primary" to="/" >Go to Login</Link><br />
</>

)

}