import React from 'react';

const Spacing:React.FC<{size: string}> = ({size= '0px'}) => {
    return (
        <div style={{'paddingBottom' : size}}/>
    );
};

export default Spacing;