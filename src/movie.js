import React from "react";
import Comment from "./comment"
import Rate from "./rate";
import Review from "./reviewForm";

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            synopsis: props.synopsis,
            title: props.title,
            image: props.image,
            spanId: props.spanId
        }
    }

    //The method will display the movie card neatly to the screen
    // It also calls the review and the rate components and places them
    // within the card
    render(){
        
        let comments = []
        if (this.state.comments){
            for(let i of this.state.comments){
                comments.push(<Comment {...i}/>)
            }
        }
        return(            
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4 className="title">
                    {this.state.title}
                    </h4>
                </div>
                
                <div className="card-body center">
                {this.state.image}
                </div>
                <p>{this.state.synopsis}</p>
                <Review></Review>
                <p></p>
                <Rate></Rate>
                
            </div>
        )

    }
}