import React from 'react'

const Aaron = {
    "name": "Aaron",
    "description": "I am Aaron. One of the developers of Anything Goes. I have a larger brain and a ginourmous IQ.",
    "picture": 'https://media.discordapp.net/attachments/1169434139771019347/1180957688818049084/IMG_8057.png?ex=657f4f8e&is=656cda8e&hm=2da15627e28be3b699750aca194694f9407bb05f735b9e59595d71c978d12bdb&=&width=557&height=670'
  }

const AboutModalAaron = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Aaron.name} </h2>
                <center><img src={Aaron.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Aaron.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalAaron