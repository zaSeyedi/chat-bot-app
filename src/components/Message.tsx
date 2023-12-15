import React from 'react';

type MessageInfo = {
    text: string;
    createdAt:string;
};

const Message = ({ text, createdAt }: MessageInfo) => {
    return (
        <div className="">
            <p className="">{text}</p>

        </div>
    );
};

export default Message;