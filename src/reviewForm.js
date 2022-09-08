import React, { createElement } from "react";

// This component will create a button and a text area
// The button is clickable and calls a function that update the state of the props
export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             text: <span> &nbsp;</span>,
             a: '',
             b: '',
             author: ''
         }
         this.reviews = ''
         this.array = []   
         this.area = <textarea className="box" value={this.state.a}></textarea>
         this.review = this.review.bind(this)
    }

        // This function gets called every time the button is clicked
        // It assigns new values to the props
        // based on user input
        
        review = () => {
            this.state.author = prompt("Type your name"); 
            this.state.b = prompt("Type your review");
            this.array.push(this.state.b)
            this.reviews += `${this.state.b} - by ${this.state.author}${'\n'}`
            
            this.state.a = this.reviews
            
            this.area = <textarea className="box" value={this.state.a}></textarea>
            
            this.setState({text: <span className="center">Your review was added successfully</span>})
        }
    
    
    // This method will render the Review components to the screen
    render(){
        
        return(
            <>
            <p className="center"> Write A Review</p>
                
            <button className="btn btn-secondary center" onClick={this.review}>Write</button>
            {this.state.text}
            {this.area}

            
            </>

        )
    }
}