import React from 'react'

const Brent = {
    "name": "Brent",
    "description": "I am Brent. One of the developers of Anything Goes. I have a large brain and a larger IQ.",
    "picture": 'https://cdn.discordapp.com/attachments/1169434139771019347/1180957690101510144/IMG_8059.png?ex=657f4f8e&is=656cda8e&hm=0f60ca5a5c9447822268d85b4fabafb82a7667ccbbcd87450a1fa08696900c84&'
  }

const AboutModalBrent = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Brent.name} </h2>
                <center><img src={Brent.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Brent.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalBrent