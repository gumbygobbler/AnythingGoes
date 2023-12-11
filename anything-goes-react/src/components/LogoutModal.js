import React from 'react'
import ButtonLink from "./ButtonLink";



const LogoutModal = ({open,close}) => {

    if(!open) return null

    return (

        <div className = "overlay">
            <div className = 'logout-modal-container'>
                <div className = "return-to-home-button">
                    <center>Logged Out Successfully</center>
                    <ButtonLink to = "/home" classes = "general-button">
                        Return To Home
                    </ButtonLink>
                </div>
            </div>
        </div>

    )

}

export default LogoutModal