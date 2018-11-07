import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    componentDidMount() {
        this.props.getVenues("beer");
    }
    render(){
        return(
            <div id='map'>
            </div>
        )
    }

}

export default Map