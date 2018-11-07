import React, {Component} from "react";
import './Menu.css'
import Search from './Search'

class Menu extends Component {

    render() {
    return (

        <div className={'menuContainer'} >
<Search updateQuery={this.props.updateQuery}/>
            <ul>
                {this.props.selectedVenues.map((venue)=>
                    {
                        return(

                            <li onClick= {()=>{
                                this.props.animationControl(venue,1);
                                this.props.setInfoWindow(venue)}}>
                                <p>
                                    {venue.name}
                                </p>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )}
}

export default Menu;