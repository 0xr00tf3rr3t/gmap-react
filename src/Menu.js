import React, {Component} from "react";
import './Menu.css'
import Search from './Search'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './Close.css';;
library.add(faTimesCircle);

class Menu extends Component {


    render() {
        return (
            <div className={this.props.hiddenStyle?"menuContainer hidden ":"menuContainer "}>
                <aside className={this.props.hiddenStyle ? "hide" :""}>

                    <Search updateQuery={this.props.updateQuery} tabindex={'1'} hiddenStyle={this.props.hiddenStyle}/>
                    {
                        <ul>
                            {this.props.selectedVenues.map((venue, index) => {

                                    return (
                                        <li className={this.props.hiddenStyle ? "hidden" : "show"} tabIndex={3 + (index)}key={index}
                                            role={'button'} onKeyDown={
                                            (e) => {
                                                let letter = e.key;
                                                if (letter === "Enter" || letter === " ") {
                                                    this.props.animationControl(venue, 1);
                                                    this.props.setInfoWindow(venue)
                                                }
                                            }
                                        } onClick={() => {
                                            this.props.animationControl(venue, 1);
                                            this.props.setInfoWindow(venue)
                                        }}>
                                            <p>
                                                {venue === undefined ? "" : venue.name}
                                            </p>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    }
                </aside>
            </div>
        )
    }
}

export default Menu;