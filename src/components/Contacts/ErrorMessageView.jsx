import React from 'react';

const ErrorMessageView = ({children}) => {
    return (
        <div className='error'>
            {children}
        </div>
    );
}

export default ErrorMessageView;
