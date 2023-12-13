import React from 'react'
import Image from 'react-bootstrap/Image';

const Andrew = {
    "name": "Andrew",
    "description": "I am Andrew. I am CEO and one of the developers of Anything Goes. I am a certified gamer.",
    "picture": 'https://media.licdn.com/dms/image/D5603AQHACQ2AZNlzdQ/profile-displayphoto-shrink_400_400/0/1692827825796?e=1707955200&v=beta&t=Zf3lSg1NXGA9fJvWk5kT_oSGvp3tG69noOLfKxzgfC0'
  }
  

const AboutModalAndrew = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Andrew.name} </h2>
                <center><Image roundedCircle src={Andrew.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Andrew.description}</p>

            </div>
        

        </div>
        </div>

    )

}

export default AboutModalAndrew