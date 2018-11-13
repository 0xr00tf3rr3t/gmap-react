import React,{Component}from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"
library.add(faSearch);


class Search extends Component{
    render(){
        return(
            <div className={'searchBar'}>
                <FontAwesomeIcon icon={faSearch} sixe={"fa-lg"}/>
                <input type="text"
                       aria-label={'search'}
                       value={this.props.query}
                       onChange={(event) => this.props.updateQuery(event.target.value)
                       }

                className={this.props.hiddenStyle ? "hidden searchInput" : "searchInput"}/>
            </div>

        )
    }
}
export default  Search