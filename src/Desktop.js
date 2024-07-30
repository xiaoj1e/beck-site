import React from "react";
import "./styles.css";
import me from "./images/IMG_0611.jpg";
// import SplitType from 'split-type';
// import { gsap } from "gsap";

import bittermelon from './svg/bittermelon.svg';
import dandelion from './svg/dandelion.svg';
import flower from './svg/flower.svg'
import purpleFlower from './svg/purple_flower.svg';
import ginkgo from './svg/ginkgo.svg'
import curve from './svg/curve.svg'

export const Desktop = () => {
    //const myText = new SplitType('#my-text')

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1
    // })
    return (
    <div className="desktop">
        <div className="div">
            <div className="right">
                <img className="pic" alt="Pic" src={me} />
                <img className="bittermelon slow-gear svg" alt="Bittermelon" src={bittermelon} />
                <img className="dandelion slow-gear svg" alt="Dandelion" src={purpleFlower}/>
            </div>
            <div className="left">
                <img className="ginkgo svg wiggle" alt="Ginkgo" src={ginkgo} />
                    <p className="bio svg-sine-wave" id="my-text">
                    Beck Liao is a full-stack engineer and designer living in the San Francisco Bay Area.
                    <br />
                    They build intuitive and playful interactions for the web.
                    <br />
                    Previously Software Engineer @ Informatica
                    </p>
                    <img className="flower gear svg" alt="Flower" src={flower} />
                    <img className="dandelion-2 gear svg" alt="Dandelion" src={dandelion} />
                    <div>
                        <span role="img" aria-label="memo">📝</span><a className="link" href = "mailto: beckmliao@gmail.com">Email</a> <br/>
                        <span role="img" aria-label="earth">🌍</span><a className="text link" href="https://drive.google.com/file/d/1n7J5-poXSb94pKMn_o-UdBg5EWvF5let/view?usp=sharing">Resume</a>
                    </div>
            </div>
        </div>
    </div>
    );
};
