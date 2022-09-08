import React from "react";
// import Post from "./post"
import Rate from "./rate";

export default class Comment extends React.Component{
    render(){ 
        return(
            <div className="card">
                <div className="card-header bg-success text-white">
                    {this.props.username} {this.props.date}
                </div>
                
                <div className="card-body">
                    {this.props.message}
                </div>
            </div>
        )

    }
}