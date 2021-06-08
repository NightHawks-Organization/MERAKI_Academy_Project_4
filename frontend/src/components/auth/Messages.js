import React from 'react'
import "./Messages.css"

const Messages = (props) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}

export default Messages