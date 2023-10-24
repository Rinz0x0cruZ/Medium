import React from "react";
import './HomeBody.css'
import { savePost } from '../../Resources/icons.tsx'

const BlogCard=(props)=>{
    const {profp,usern,title,con,desc,date,read,tag,imgd}=props
    return (
        <div className="al dc">
            <div className="kt">
                <div className="buc">
                    <img src={profp} />
                    <h4>{usern}</h4>
                    <span>{con}</span>
                </div>
                <h3>{title}</h3>
                <span>{desc}</span>
                <div className="bmi">
                    <p>{date}</p>
                    <p>{read}</p>
                    <span className="tags">{tag}</span>
                    <savePost />
                </div>
            </div>
            <img src={imgd}/>
        </div>
    );
}
export default BlogCard;