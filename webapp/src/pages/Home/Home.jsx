import React, { useRef, useState, useEffect } from "react";

import './Home.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";


export default function Home() {
    const whyContent = [
        {
            title: 'Easy to use',
            content: 'SOLVN boasts an intuitive and user-friendly interface, ensuring a smooth and hassle-free experience for both investors and project owners. With its streamlined navigation and clear design, SOLVN makes it effortless to explore projects, submit investment proposals, and manage accounts with ease. Whether you\'re a seasoned investor or a first-time user, SOLVN\'s simplicity ensures a straightforward journey towards impactful investing.'
        },
        {
            title: 'Higher visibility',
            content: 'With SOLVN, social impact projects and investment opportunities gain unparalleled visibility, reaching a wide audience of investors and stakeholders passionate about making a difference. Our platform showcases projects prominently, ensuring they receive the attention they deserve and increasing their chances of attracting investment and support. Through strategic partnerships and targeted marketing initiatives, SOLVN enhances the visibility of projects, amplifying their impact and driving positive change in communities worldwide.'
        },
        {
            title: 'Scalability',
            content: 'A well-designed API allows for efficient data transfer and avoids bottlenecks. This means the system can handle more users and transactions without slowing down significantly.'
        },
        {
            title: 'Well defined API\'s',
            content: 'SOLVN offers a robust and well-documented API, providing developers with clear guidelines and resources for seamless integration with their existing systems or applications. Our API documentation is comprehensive and easy to understand, featuring detailed endpoints, parameters, and examples to facilitate swift implementation and customization. By leveraging SOLVN\'s well-defined API, developers can effortlessly access project data, submit investment proposals, and enhance their platforms with social impact features.'
        },
        {
            title: 'Easy Connection',
            content: ' SOLVN facilitates seamless connections between investors and project owners, fostering collaboration and catalyzing social impact initiatives. Investors can easily discover and connect with projects aligned with their values and investment goals, while project owners gain access to a network of potential investors and partners. By simplifying the connection process, SOLVN empowers stakeholders to forge meaningful relationships, drive innovation, and create lasting social change together'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const mf = useRef();
    function onCardClick(id) {
        setCurrentIndex(prev => id);
    }

    useGSAP(() => {
        const heroText = new SplitType('.big-text-container');
        const smallText = new SplitType('.hero-small-text');
        const text = heroText.chars;
        const text2 = smallText.words;

        let tl = gsap.timeline();

        tl.fromTo(
            text,
            {
                y: 100,
                duration: .1
            },
            {
                y: 0,
                ease: 'expo.inOut',
                stagger: .3
            }
        ).from(
            text2,
            {
                y: -1000,
                duration: .2,
                ease: 'power4.in',
                stagger: .4,
            }
        )
    });

    useGSAP(() => {
        const headTextAbout = document.querySelector('.home-about-container h1');
        const aboutText = document.querySelector('.home-about-container p');
        const splitAboutText = new SplitType('.home-about-container p').words;

        const tl2 = gsap.timeline();

        tl2.fromTo(
            headTextAbout,
            {
                opacity: 0,
                x: '100%'
            },
            {
                opacity: 1,
                duration: 1,
                x: 0,
                scrollTrigger: '.home-about-container'
            }
        ).fromTo(
            splitAboutText,
            {
                opacity: 0,
                y: 10
            },
            {
                y: 0,
                opacity: 1,
                stagger: .1,
                ease: 'back.inOut',
                duration: .9,
                scrollTrigger: '.home-about-container'
            }
        )
    })

    useGSAP(() => {
        const boxes = document.querySelector('.why-card-ans');
        
        gsap.fromTo(
            boxes,
            {
                opacity: 0
            },{
                y: 0,
                opacity: 1.,
                duration: .7
            }
        )
    })

    return(
        <div className="home-page-container">
            <div ref={mf} id="home-hero-container" className="home-hero-container">
                <div className="big-text-container">
                    SOLVN
                </div>
                <div className="hero-small-text">
                    Social Oppurtunity Linkage & Ventures Network
                </div>
                <div className="hero-button-container">
                    <a href="#about" className="button-know-more">
                        Know More...
                    </a>
                    <a href="#" className="button-goto-docs">
                        Go to Docs
                    </a>
                </div>
                <div className="background-pattern"></div>
            </div>

            <div id="about" className="home-about-container">
                <h1>What is SOLVN?</h1>
                <p>
                Welcome to <b>SOLVN</b>, the revolutionary platform where investors and project creators converge for unmatched opportunities. Bridging the gap between innovative projects and visionary investors, our platform leverages a seamless, interoperable network akin to ONDC, ensuring fluid communication and transaction capabilities. Whether you're looking to invest in the next big idea or seeking the perfect backers for your project, <b>SOLVN</b> simplifies the journey, making powerful connections just a click away. Join us and start transforming potential into reality today.
                </p>
            </div>

            <div className="home-why-container">
                <h1>Why SOLVN?</h1>
                <div className="why-card-container">
                    <div onClick={() => onCardClick(0)} className="why-card">
                        <div className="why-ill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rabbit"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>
                        </div>
                    </div>

                    <div onClick={() => onCardClick(1)} className="why-card">
                        <div className="why-ill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                    </div>

                    <div onClick={() => onCardClick(2)} className="why-card">
                        <div className="why-ill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-expand"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
                        </div>
                    </div>

                    <div onClick={() => onCardClick(3)} className="why-card">
                        <div className="why-ill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-sliders"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 12h8"/><path d="M10 11v2"/><path d="M8 17h8"/><path d="M14 16v2"/></svg>
                        </div>
                    </div>

                    <div onClick={() => onCardClick(4)} className="why-card">
                        <div className="why-ill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                        </div>
                    </div>
                </div>
                <div key={currentIndex} className="why-card-ans">
                    <h4>
                        {whyContent[currentIndex].title}
                    </h4>
                    <p>
                        {whyContent[currentIndex].content}
                    </p>
                </div>
            </div>
        </div>
    )
}