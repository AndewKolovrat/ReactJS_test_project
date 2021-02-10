import React from 'react';

const Message = (props) => {
    return (
        <div>{props.text}</div>
    )
}

const MessageField = (props) => {
    return (
        props.messages.map(message => <Message text={message} key={message} />)
    )
};

export default MessageField;