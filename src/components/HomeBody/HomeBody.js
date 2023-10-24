import React from 'react'
import './HomeBody.css'
import BlogCard from './BlogCard';
import pP from '../../Resources/prof.png'

const HomeBody=()=>{
    return (
        <div className='home-body'>
            <section className='vert-scroll'>
                <div className='ah'>
                    <BlogCard 
                        profp={pP}
                        usern='rinz0x0cruz'
                        con=''
                        title='Something to read about nigga'
                        desc='Description on something to read about nigga'
                        date='27 Oct'
                        read='12 min'
                        tag='Software Development'
                    />
                </div>
            </section>
            <section className='side-stick'></section>
        </div>
    );
}
export default HomeBody;