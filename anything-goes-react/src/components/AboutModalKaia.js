import React from 'react'

const Kaia = {
    "name": "Kaia",
    "description": "I am Kaia. I am a developer for Anything Goes. I really really really really really really wanna zigazig ah ",
    "picture": 'https://cdn.discordapp.com/attachments/772358194994610176/1182104209777242132/bruh_1.jpg?ex=65837b56&is=65710656&hm=1b312896cc3c56a8691c005c2471ff9e73a99bb125e9f49a12e71f75e4c524db&'
  }

const AboutModalKaia = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Kaia.name} </h2>
                <center><img src={Kaia.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Kaia.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalKaia