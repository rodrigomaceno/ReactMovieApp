import React from 'react';
import Movie from './movie';



export default class MovieList extends React.Component{

    // This method and class are responsible for the layout of the actual app
    // all the movie cards get called and get created from within this class
    render(){
        
        return(


            <div className="container-fluid"> 
            
            <div className="row">
                <div className="col-md">
                    <Movie {...{synopsis: 'When teenager Marty McFly (Michael J. Fox) is blasted to 1955 in the DeLorean time machine created by the eccentric Doc Brown (Christopher Lloyd), he finds himself mixed up in a time-shattering chain reaction that could vaporize his future - and leave him trapped in the past.', title: 'Back to the future', image: <img className="width" src='https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg'/>, id: 1}}/>
                </div>
                <div className="col-md">
                    <Movie {...{synopsis: "When young Alan Parrish discovers a mysterious board game, he doesn't realize its unimaginable powers, until he is magically transported before the eyes of his friend, Sarah, into the untamed jungles of JUMANJI! 26 years later he is freed from the game's spell by two unsuspecting children.", title: 'Jumanji', image: <img className="width" src='https://m.media-amazon.com/images/I/51n4ErCVFSL._AC_.jpg'/>, id: 2}}/>
                </div>
                <div className="col-md">
                    <Movie {...{synopsis: "Steven Spielberg brings dinosaurs to stunning life in this thriller about an island theme park where the star attractions go on a rampage.", title: 'Jumanji', image: <img className="width" src='https://m.media-amazon.com/images/I/61RLRZnbc+L._AC_SY741_.jpg'/>, id: 3}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Movie {...{synopsis: 'Despite his sub-normal IQ , Gump leads a truly charmed life, with a ringside seat for many of the most memorable events of the second half of the 20th century.', title: 'Forrest Gump', image: <img className="width" src='https://m.media-amazon.com/images/I/61SESEtA1NL._AC_SY679_.jpg'/>, id: 4}}/>
                </div>
                <div className="col-md">
                    <Movie {...{synopsis: "It begins as just another urban legend - the whispered tale of a nightmarish videotape that causes anyone who watches it to die seven days later.", title: 'The Ring', image: <img className="width" src='https://m.media-amazon.com/images/I/41BRzsdx7EL._AC_.jpg'/>, id: 5}}/>
                </div>
                <div className="col-md">
                    <Movie {...{synopsis: "Leonardo DiCaprio and Kate Winslet shine in the timeless love story born of tragedy that created an international phenomenon as memorable as the legendary 'ship of dreams'. ", title: 'Titanic', image: <img className="width" src='https://m.media-amazon.com/images/I/51y1xUV9FIL._AC_.jpg'/>, id: 6}}/>
                </div>
            </div>
            
            </div>

        )
    }
}