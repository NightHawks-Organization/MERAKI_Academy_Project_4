import React from 'react'

const Messages = (props) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}

export default Messages