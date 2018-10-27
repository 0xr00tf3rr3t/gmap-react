import React, {Component} from "react";
import './Menu.css'

class Menu extends Component {

    render() {
    return (

        <div className={'menuContainer'} >

            <ul>
                {this.props.venues.map((venue)=>
                    {
                        return(
                            <li >
                                <p>
                                    {venue.venue.name}
                                </p>
                            </li>

                        )
                    }


                )}
            </ul>
        </div>
    )
    }
}

export default Menu;