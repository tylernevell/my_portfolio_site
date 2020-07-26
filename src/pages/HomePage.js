import React from 'react';
import TitleSplash from "../components/TitleSplash";
import Carousel from "../components/Carousel";

function HomePage(props) {

    return(
        <div>
            <TitleSplash title={ props.title } subTitle={props.subTitle} text={props.text}/>
            <Carousel/>
        </div>
    );
}

export default HomePage;
