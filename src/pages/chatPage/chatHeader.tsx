import React, { useState, useEffect, Children } from 'react';
import { Search, Victory, Clock, BackIcon } from '../../assets/icons/AppIcons'

interface IProps {

}
const ChatHeader: React.FC<IProps> = ({ }) => {

    return (
        <div className="p-6 border-b flex flex-row justify-between w-full items-center">
            <div className='flex flex-row'>
                <Search />
                <Victory />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Clock/>
                <div>2:23</div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='border w-8 h-8 rounded-full '></div>
                <BackIcon/>
            </div>
        </div>
    );
}

export default ChatHeader;