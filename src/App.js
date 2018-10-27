import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Map from './Map.js'
import Menu from './Menu.js'

class App extends Component {
    state = {
        venues: [],
        map: {},
        markers: [],
        infoWindow: {}

    };


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

    renderMap = () => {

        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA4mGbTg2azsVzhvMhPRY8pTht8HAcD-5g&callback=initMap");
        window.initMap = this.initMap;
    };

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 18.465518, lng: -66.116316},
            zoom: 15,
            clickableIcons: false
        });
        let infowindow = new window.google.maps.InfoWindow({});
        let newArray = [];
        this.state.venues.map((myVenue) => {
                let contentString = `${myVenue.venue.name}`;

                let marker = new window.google.maps.Marker({

                    position: {
                        lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng
                    },
                    map: map,
                    title: myVenue.venue.name
                });
                marker.addListener('click', function () {
                    console.log(map);
                    console.log(marker);
                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);
                });
                newArray.push(marker);
                this.setState({
                    markers: newArray,
                    infoWindow: infowindow,
                    map: map
                });


            }
        );

    };
    setInfoWindow = (marker) => {
   let mapMarker= this.state.markers.filter(
       (filter) => {
       if (filter.title === marker.venue.name) {
           return filter;
       }}
       );


        this.state.infoWindow.setContent(marker.venue.name);

        this.state.infoWindow.open(this.state.map,
            mapMarker[0])
    };

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
