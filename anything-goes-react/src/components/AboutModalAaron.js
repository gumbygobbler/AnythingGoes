import React from 'react'
import Image from 'react-bootstrap/Image';

const Aaron = {
    "name": "Aaron",
    "description": "I am Aaron. One of the developers of Anything Goes. I have a larger brain and a ginourmous IQ.",
    "picture": 'https://media.licdn.com/dms/image/C4D03AQFXKNNz0EvbqQ/profile-displayphoto-shrink_400_400/0/1620264094067?e=1707955200&v=beta&t=Y69vwm2zSVlLhKIzX5_Cik2RCp7SFE0vu2qN5UE71Vo'
  }

const AboutModalAaron = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
        <div className = 'modal-container' onClick = {close}>
            
            <div className="modal-text-container">

                <h2 className='modal-admin-name'> {Aaron.name} </h2>
                <center><Image roundedCircle src={Aaron.picture} style={{width:'30%'}}/></center>
                <p className='modal-admin-description'>{Aaron.description}</p>

            </div>
        

        </div>
        </div>

    )

}

export default AboutModalAaron