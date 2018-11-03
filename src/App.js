import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Map from './Map.js'
import Menu from './Menu.js'

class App extends Component {

    state = {
        venues: [],// VEnues to be recieved with API
        map: {},// Reference to the map
        markers: [],//List of all markers on map
        infoWindow: {},//Reference to the infoWindows
        selectedMarker: null //Reference to the currently selected marker

    };

    /**
     * Get's pictures from Flciker
     */
    getPictures = () => {
        const endPoints = "https://api.foursquare.com/v2/venues/?";
        const parameters = {
            client_id: "543XCRHEDCJN5YQIZONCQ1NR0O3JWIYCFSWS4EKPPZMRPX3U",
            client_secret: "GUAGXWWAQXHWBJQKLQ3QY5BIWXTF2VWBBHKX10QRLEIOGDBX",
            VENUE_ID: "4ca7f3bcf47ea143716f7021"
        };
        axios.get(endPoints + new URLSearchParams(parameters)).then(
            response => {
                console.log(response);
            }
        ).catch(e => {
            console.log(e)
        })
    };
    /**
     *  Gets the info from Foursquare
     * @param query : What's gonna be searched on the server
     */
    getVenues = (query) => {
        const endPoints = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id: "543XCRHEDCJN5YQIZONCQ1NR0O3JWIYCFSWS4EKPPZMRPX3U",
            client_secret: "GUAGXWWAQXHWBJQKLQ3QY5BIWXTF2VWBBHKX10QRLEIOGDBX",
            query: '"' + query + '"',
            near: " Old San Juan",
            v: "20180323"
        };
        axios.get(endPoints + new URLSearchParams(parameters))
            .then(response => {

                this.setState(
                    {
                        venues: response.data.response.groups[0].items
                    }, this.renderMap()
                );
                console.log(response)
            })
            .catch(error => {
                    console.log('Error!!' + error);
                }
            )
    };
    /**
     * Loads the script used to  render the map
     */
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mGbTg2azsVzhvMhPRY8pTht8HAcD-5g&callback=initMap");
        window.initMap = this.initMap;
    };
    /**
     * Initilize Google Maps elements needed for rendering
     */
    initMap = () => {
        let stateref = this;//Reference to  the window
        let map = new window.google.maps.Map(document.getElementById('map'), {//Sets the parameters for the map
            center: {lat: 18.465518, lng: -66.116316},
            zoom: 15,
            clickableIcons: false
        });
        let infoWindow = new window.google.maps.InfoWindow({});//Initialize the InfoWindows
        let newArray = [];//holds the new array to be created
        this.state.venues.map((myVenue) => {  //Gets all venues

                let contentString = `${myVenue.venue.name}`;//Title on info Windows
                let marker = new window.google.maps.Marker({//Maps each marker

                    position: {
                        lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng //Sets the position
                    },
                    map: map,
                    animation: window.google.maps.Animation.DROP,
                    title: myVenue.venue.name
                });
                marker.addListener('click', function () {

                    infoWindow.setContent(contentString);//Change  Name
                    infoWindow.open(map, marker);// Opens the IW
                    {
                        if (stateref.state.selectedMarker !== null && stateref.state.selectedMarker !== marker) {//If the selectedmarker isnt't
                            stateref.state.selectedMarker.setAnimation(null);         // emptu && is  not already selected
                        }
                        if (marker.getAnimation() !== null) {//If animation isn't equal to null
                            marker.setAnimation(null); // Set null
                        } else {
                            marker.setAnimation(window.google.maps.Animation.BOUNCE);//Otherwise make animation bounce
                        }
                        stateref.setState({
                            selectedMarker: marker

                        })
                    }
                });
                newArray.push(marker);
                this.setState({
                    markers: newArray,
                    infoWindow: infoWindow,
                    map: map
                });


            }
        );

    };

    setInfoWindow = (marker) => {

        let mapMarker = this.state.markers.filter(
            (filter) => {
                if (filter.title === marker.venue.name) {
                    return filter;
                }
            }
        );

        this.state.infoWindow.setContent(marker.venue.name);

        this.state.infoWindow.open(this.state.map,
            mapMarker[0])
    };

    componentDidMount() {
        this.getPictures();
    }

    render() {
        return (
            <div className={'Main-Container'}>
                <Menu markers={this.state.markers} venues={this.state.venues} infoWindow={this.state.infoWindow}
                      map={this.state.map} setInfoWindow={this.setInfoWindow}/>
                <Map renderMap={this.renderMap} getVenues={this.getVenues}/>
            </div>
        );
    }
}

function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index)

}

export default App;
