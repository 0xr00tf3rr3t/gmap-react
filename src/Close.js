import React,{Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import './Close.css';

class Close extends Component{

    render(){
       return( <div>
        <span className={this.props.hiddenStyle ? 'closeButton ':"closeButton outside"} tabIndex={'2'} aria-label={"Close"} onKeyDown={(e)=>{
            let letter= e.key;
            if(letter==="Enter"||letter===" ")
                this.props.hiddenToggle()
        }} role={'button'}
              onClick={() => {
                  this.props.hiddenToggle()
              }}>
                    <FontAwesomeIcon icon={faTimesCircle} size={'2x'}/>
                </span>
            </div>)

    }
}
export default Close