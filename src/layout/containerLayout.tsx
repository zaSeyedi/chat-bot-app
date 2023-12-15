import React, { useState, useEffect, Children } from 'react';

interface IProps {
    children: JSX.Element
}
const ContainerLayout: React.FC<IProps> = ({children}) => {

    return (
        <div className="w-full h-screen p-8 items-center">
            <div className='border max-w-lg h-full mx-auto rounded-2xl'>
                {children}
            </div>

        </div>
    );
}

export default ContainerLayout;