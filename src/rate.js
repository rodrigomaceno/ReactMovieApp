import React from "react";


// This class creates the ratings component for the movie
export default class Rate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             rating: [],
             sum: 0,
             score: '0',
             result: 0,
             text: '',
             count: 0,
             stars: ''
         }
         this.userRatings = []
         this.rate = this.rate.bind(this)
    }

    // This method calculates and checks the movie ratings entered by the user
    // It also calculates the average of the ratings and updates the props to  
    //  display them
        rate = () => {
            let a = parseInt(prompt("enter a number from 1 to 5 for the rating"));
            if(a>0 && a<=5){
                this.state.rating.push(a)
                this.state.count++
            
            
                this.state.sum = this.state.rating.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
                console.log(this.state.rating.length)
    
                this.state.score =  this.state.sum/this.state.count
    
                if (this.state.score < 5){
                    this.setState({stars: <>&#9733;&#9733;&#9733;&#9733;</>})
                    if(this.state.score < 4){
                        this.setState({stars: <>&#9733;&#9733;&#9733;</>})
                        if(this.state.score < 3){
                            this.setState({stars: <>&#9733;&#9733;</>})
                            if(this.state.score < 2){
                                this.setState({stars: <>&#9733;</>})
                                
                            }
                        }
                    }
    
                }else{this.setState({stars: <>&#9733;&#9733;&#9733;&#9733;&#9733;</> })}
            }
            
    
            
            
            this.setState({text: <span className="center"></span>})
            
        }

// This method displays the movie rating and movie score on the screen
// It contains a clickable button that updates the state of props
    render(){
        return(
            
            <>
            <p className="center">How many stars out of 5 would you give this movie?</p>
            <button className="btn btn-secondary center" onClick={this.rate}>Rate</button><br/>
            <span className="star center">{this.state.stars}</span>
            <span className="center">Movie score: {this.state.score}</span>
            </>
            
        )
        
    }
}