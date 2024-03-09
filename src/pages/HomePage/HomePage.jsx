
import React from 'react';
import  slider1  from '../../assets/images/one.png'
import  slider2  from '../../assets/images/two.png'
import  slider3  from '../../assets/images/three.png'
import  slider4  from '../../assets/images/four.png'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { WrappedContainer } from './style';
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {


    return (

        

        <div>
            <SliderComponent arrImages={[slider1, slider2, slider3, slider4]}/>

            <WrappedContainer>
                
            </WrappedContainer>
            <div id='container' style={{marginTop:"20px"}}>
                <CardComponent></CardComponent>
            </div>
        </div>
    );
};

export default HomePage;
