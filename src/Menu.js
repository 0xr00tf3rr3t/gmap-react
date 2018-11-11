import React, {Component} from "react";
import './Menu.css'
import Search from './Search'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faTimesCircle);

class Menu extends Component {


    render() {
        return (
            <div className={this.props.hiddenStyle ? "menuContainer hidden" : "menuContainer"}>
                <span className={'closeButton'} tabIndex={'2'} onKeyDown={()=>this.props.hiddenToggle()} onClick={() => {
                    this.props.hiddenToggle()
                }}>
                    <FontAwesomeIcon icon={faTimesCircle} size={'2x'}/>
                </span>
                <Search updateQuery={this.props.updateQuery} tabindex={'1'} hiddenStyle={this.props.hiddenStyle}/>
                {
                  <ul>
                    {this.props.selectedVenues.map((venue,index) => {

                            return (
                                <li className={this.props.hiddenStyle ? "hidden" : ""}tabIndex={3+(index)} role={'button'} onKeyDown={
                                    ()=>{this.props.animationControl(venue, 1);
                                        this.props.setInfoWindow(venue)}
                                } onClick={() => {
                                    this.props.animationControl(venue, 1);
                                    this.props.setInfoWindow(venue)
                                }}>
                                    <p>
                                        {venue===undefined?"":venue.name}
                                    </p>
                                </li>
                            )
                        }
                    )}
                </ul>
                      }
            </div>
        )
    }
}

export default Menu;