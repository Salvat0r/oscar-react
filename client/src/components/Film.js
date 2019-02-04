import React from 'react';

const Film = ({property}) => {

    const { index, picture, vote, title } = property;

    const fn = function () {
        /* do your action */
    }
        return (
            <div 
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex={index}
            >
                <img 
                    id={index} 
                    src={picture} 
                    alt={title} 
                    data-action="http://andyyou.github.io/react-coverflow/" 
                    vote={vote} 
                    style={{
                        display: 'block',
                        width: '100%',
                    }}
                    />
                
            </div>
        );
    
}

export default Film;