import React, { Component } from 'react';
import '../style/otherProfile.css'
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import axios from 'axios';

function OtherProfile() {
  const { authTokens } = useAuth();
  const [user, setUserData] = useState("");

  useEffect(() => {
    // Your code here
    axios({
        method: 'get',
        url: 'http://localhost:5000/api/auth/me',
        headers: {
            'x-access-token': authTokens
          }
    }).then(res => {
        setUserData(res.data);
        console.log("response from token")
    }).catch(e => {
      console.log("error",e)
    });
  }, []);
  
        return(
        <div className='profile-container'>
      
        
					<div className="img-holder">
						<img  src = {user.avatar} alt="" id="img" className="img" />
				</div>

        
        <div className="name">
        {user.fullName}
        </div>

        <div>
       <button class = "button button1">Follow {user.fullName} </button>
     </div>
        
      <div class="form-group">
    <label >bio</label>
    <textarea className= "text-area"  id="exampleFormControlTextarea1" rows="5" placeholder={user.bio} readOnly ></textarea>
      </div>


        </div>
        );
    
}

export default OtherProfile;