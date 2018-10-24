import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    state={
        venues:[]
    };
    componentDidMount() {
        this.renderMap();
        this.getVenues();
    }

    getVenues = () => {
        const endPoints = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id: "543XCRHEDCJN5YQIZONCQ1NR0O3JWIYCFSWS4EKPPZMRPX3U",
            client_secret: "GUAGXWWAQXHWBJQKLQ3QY5BIWXTF2VWBBHKX10QRLEIOGDBX",
            query: "food",
            near: "Sydney",
            v: "20180323"
        };
        axios.get(endPoints + new URLSearchParams(parameters))
            .then(response => {
                this.setState(
                    {
                       venues: response.data.response.groups[0].items
                    }
                );
                console.log(response)
            })
            .catch(error => {
                    console.log('Error!!' + error);
                }
            )
    };
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mGbTg2azsVzhvMhPRY8pTht8HAcD-5g&callback=initMap");
        window.initMap = this.initMap
    };

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    };

    render() {
        return (
            <main>
                <div id="map">

                </div>
            </main>
        );
    }
}

/*<script ></script> */
function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index)

}

export default App;
