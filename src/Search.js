import React,{Component}from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch);


class Search extends Component{
    render(){
        return(

            <div className={'searchBar'}>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="search"
                       value={this.props.query}
                       onChange={(event) => this.props.updateQuery(event.target.value)}/>
            </div>

        )
    }
}
export default  Search