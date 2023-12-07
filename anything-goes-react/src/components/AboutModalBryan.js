import React from 'react'

const Bryan = {
    "name": "Bryan",
    "description": "I am Bryan. I am two of the developers of Anything Goes. I have a small brain and a smaller IQ.",
    "picture": 'https://media.discordapp.net/attachments/1169434139771019347/1180957689203929198/IMG_8058.png?ex=657f4f8e&is=656cda8e&hm=f971347ba77b2fd09c1a677c1ee2e2651e590221af2f9e01d991fb8cbedd07df&=&width=555&height=670'
  }

const AboutModalBryan = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Bryan.name} </h2>
                <center><img src={Bryan.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Bryan.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalBryan