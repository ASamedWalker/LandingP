import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';



const Home = () => {
    return (
        <>
           <InforSection {...homeObjOne} />
           <InforSection {...homeObjTwo} />
           <InforSection {...homeObjThree} />
        </>
    );
};

export default Home;
