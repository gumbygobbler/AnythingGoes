import React from 'react'

const Andrew = {
    "name": "Andrew",
    "description": "I am Andrew. I am CEO and one of the developers of Anything Goes. I am a certified gamer.",
    "picture": 'https://cdn.discordapp.com/attachments/1169434139771019347/1180957689623367781/IMG_8060.png?ex=657f4f8e&is=656cda8e&hm=7262dd7f7beac2a541943138b9d50d8628f860326e3ef824dcd2d8ac2d6725e0&'
  }
  

const AboutModalAndrew = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Andrew.name} </h2>
                <center><img src={Andrew.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Andrew.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalAndrew