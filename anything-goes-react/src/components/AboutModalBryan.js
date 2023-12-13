import React from 'react'
import Image from 'react-bootstrap/Image';

const Bryan = {
    "name": "Bryan",
    "description": "I am Bryan. I am two of the developers of Anything Goes. I have a small brain and a smaller IQ.",
    "picture": 'https://media.licdn.com/dms/image/D5603AQGbY4AJ4Ver7A/profile-displayphoto-shrink_400_400/0/1685167913689?e=1707955200&v=beta&t=sI3WgPGY74gIMLjLhQUjmHB7U0bLN02_wqbnDg5XYWY'
  }

const AboutModalBryan = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
        <div className = 'modal-container' onClick = {close}>

            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Bryan.name} </h2>
                <center><Image roundedCircle src={Bryan.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Bryan.description}</p>

            </div>
        

        </div>
        </div>
    )

}

export default AboutModalBryan