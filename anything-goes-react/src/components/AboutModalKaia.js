import React from 'react'
import Image from 'react-bootstrap/Image';

const Kaia = {
    "name": "Kaia",
    "description": "I am Kaia. I am a developer for Anything Goes. I really really really really really really wanna zigazig ah ",
    "picture": 'https://media.licdn.com/dms/image/D4D35AQGKFKlhPOxKaQ/profile-framedphoto-shrink_400_400/0/1690328350248?e=1702821600&v=beta&t=MsDXtWqdoXpUdFsHCG5wW51DqBK2tU_Pv2OJqoZwmls'
  }

const AboutModalKaia = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Kaia.name} </h2>
                <center><Image roundedCircle src={Kaia.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Kaia.description}</p>

            </div>
        

        </div>
        </div>

    )

}

export default AboutModalKaia