import React from 'react'

const Kaia = {
    "name": "Kaia",
    "description": "I am Kaia. I am a developer for Anything Goes. I like making food, designing websites, and playing games!",
    "picture": 'https://pbs.twimg.com/media/FzbBULhagAA0SKA?format=jpg&name=4096x4096'
  }

const AboutModalKaia = ({open,close}) => {

    if(!open) return null

    return (


        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Kaia.name} </h2>
                <center><img src={Kaia.picture} style={{width:'250px'}}/></center>
                <p className='modal-admin-description'>{Kaia.description}</p>

            </div>
        

        </div>

    )

}

export default AboutModalKaia