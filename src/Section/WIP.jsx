import React, { Component } from 'react';
import Image from 'next/image';

class WIP extends Component {
    render() {
        return (
            <div className='section_wrapper'>
                <h1>What I'm currently working on ...</h1><br/>
               
                <div className='grid_wrapper'>
                    <div className='wip_sec'>
                        <Image className='section_img' src={"/Jelly.png"} width={800} height={500} alt='Jelly figma image'/>
                        <div className='desc_container'>
                            <h2>Jelly</h2>
                            <div className='description'>
                                <p>
                                    Jelly is a mobile social media application where users will be able to share
                                    and review recipies ranging from appetizers to desserts. I haven't finalized the stack I am going to use however,
                                    I have settled on using React Native for the Front-end while the Back-end stack is still up in the air. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>
        );
    }
}

export default WIP;