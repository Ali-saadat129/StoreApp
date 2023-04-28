import React from 'react';

// hooks
import { useContext } from 'react';

// context
import { Contextprovider } from '../context/Context';

const CaredsParent = () => {

    const allData = useContext(Contextprovider)
    console.log(allData)
    
    return (
        <div>
            {allData.map(data => <p key={data.name}>{data.title}</p>)}
        </div>
    );
};

export default CaredsParent;