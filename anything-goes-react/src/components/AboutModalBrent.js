import React from 'react'
import Image from 'react-bootstrap/Image';

const Brent = {
    "name": "Brent",
    "description": "I am Brent. One of the developers of Anything Goes. I have a large brain and a larger IQ.",
    "picture": 'https://media.licdn.com/dms/image/C4E03AQFwh5oOL_-epw/profile-displayphoto-shrink_400_400/0/1662750917369?e=1707955200&v=beta&t=0YnRJ55e7jMdv_0oH25R1hlvXzkLhGQqTonqo306374'
  }

const AboutModalBrent = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Brent.name} </h2>
                <center><Image roundedCircle src={Brent.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Brent.description}</p>

            </div>
        

        </div>
        </div>

    )

}

export default AboutModalBrent