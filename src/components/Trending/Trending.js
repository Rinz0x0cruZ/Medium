import React from 'react'
import trend from '../../Resources/trend.svg'
import TrendCard from './TrendCard'
import './Trending.css'
import pP from '../../Resources/prof.png'
const Trending = () =>{
    return (
        <div className='bod'>
            <div className='trending'>
                <div className='top-strip-trend'>
                    <img src={trend}/>
                    <h2>Trending on Medium</h2>
                </div>
                <div className='trend-post'>
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="Why should you die?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="Why should you die?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="HHHHHahahahahahhalmao?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="Why should you die?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="Why should you die?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                    <TrendCard 
                        profilePic={pP}
                        username="rinz0x0cruz"
                        context=""
                        title="Why should you die?"
                        date="13 Oct"
                        read="13 min"
                        star=''
                    />
                </div>
            </div>
        </div>
    );
}
export default Trending;
