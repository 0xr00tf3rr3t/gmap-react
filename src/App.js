import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Map from './Map.js'
import Menu from './Menu.js'
import Config from './config.js';
import escapeRegExp from 'escape-string-regexp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './ErrorBoundary.js';


// Example : https://api.foursquare.com/v2/venues/4ca7f3bcf47ea143716f7021?client_id=543XCRHEDCJN5YQIZONCQ1NR0O3JWIYCFSWS4EKPPZMRPX3U&client_secret=GUAGXWWAQXHWBJQKLQ3QY5BIWXTF2VWBBHKX10QRLEIOGDBX&v=20180323
class App extends Component {
    state = {
        venues: [],// Venues to be recieved with API
        map: {},// Reference to the map
        markers: [],//List of all markers on map
        infoWindow: {},//Reference to the infoWindows
        selectedMarker: null,//Reference to the currently selected marker
        client_id: Config.client_id,
        client_secret: Config.client_secret,
        gmapAPI: Config.gmapAPI,
        query: '',
        selectedVenues: [],
        hiddenStyle:false
    };
    /**
     * Keeps updating the query on each change
     * @param query
     */
    updateQuery = (query) => {
        this.setState({query: query.trim()}, () => {
            this.getQuery();
        })

    };
    /**
     * Gets the values using the query results
     */
    getQuery = () => {
        let {query} = this.state;//Local variable for state
        let newArray = [];//Temporary array for new values
        if (this.state.query !== '') {//If query not empty
            const match = new RegExp(escapeRegExp(query), 'i');//Create RegExp with query
            let values = this.state.venues.filter((venue) => {//filters the Query
                if(venue!==undefined)
                {
                if (match.test(venue.name)) {//If it match returns it
                    return venue;
                }
                    }
            });

            this.setState({
                selectedVenues: values //set values as selectedVenues
            }, () => {
                newArray=this.state.markers.map(
                    (marker)=>{

                        for(let selected of this.state.selectedVenues )
                        {

                            if(marker.title===selected.name)
                            {
                                marker.setMap(this.state.map);

                                break;
                            }
                            marker.setMap(null);
                        }
                        if (this.state.selectedVenues.length===0)
                        {
                            let toastID=null;

                            if (!toast.isActive(toastID)) {
                                toastID = toast.info("No Venue Found!",{
                                    position: toast.POSITION.BOTTOM_RIGHT,
                                    toastId:"venueToast"});
                            }
                            marker.setMap(null);
                        }

                        return marker;
                    }
                );



                this.setState({
                    markers: newArray
                })
            })


        }
        else {

            newArray = this.state.markers.map((marker) => {
                    marker.setMap(this.state.map);
                    return marker;
                } //for (let marker in this.state.markers) {
            );
            //   }
            this.setState({
                selectedVenues: this.state.venues,
                markers: newArray
            })
        }
    };
    /**
     * Get's pictures from
     */
    getDetailedInfo = () => {
        let app = this;

        fetchDetails().then(
            (value) =>
            {


                this.setState({
                        venues: value,
                    },
                    () => {
                        this.setState({
                            selectedVenues: this.state.venues
                        })
                    }
                );
                this.renderMap();

            }
        );


        async function fetchDetails() {
            let oldArray = app.state.venues;
            let newArray = [];
            const endPoints = "https://api.foursquare.com/v2/venues/";
            const parameters = {
                client_id: app.state.client_id,
                client_secret: app.state.client_secret,
                v: "20180323"
            };

            const promises = oldArray.map(async (item) => {

                item = item.venue;
                return await axios.get(endPoints + item.id + "?" + new URLSearchParams(parameters)/*"https://.myjson.com/bins/d0rvq"*/).then((
                    (item) => {

                        return item.data.response.venue;
                    }
                )).catch(error=>
                    {
                        let toastID=null;

                        if (!toast.isActive(toastID)) {
                            toastID = toast.error("Error Getting Venues! Verify your API KEY\n"+error,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                toastId:"netToast"});
                        }
                    }

                )
            });
            return await Promise.all(promises);
        }

    };
    /**
     *  Gets the info from Foursquare
     * @param query : What's gonna be searched on the server
     */
    hiddenToggle=()=>{
        this.setState({
            hiddenStyle:!this.state.hiddenStyle
        })

    };
    /**
     * Gets suggested venues from Foursuqre
     * @param query
     */
    getVenues = (query) => {
        const venueEndPoint = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id: this.state.client_id,
            client_secret: this.state.client_secret,
            query: '"' + query + '"',
            near: " Old San Juan",
            v: "20180323"
        };
        axios.get(venueEndPoint + new URLSearchParams(parameters))
            .then(response => {
                this.setState(
                    {
                        venues: response.data.response.groups[0].items,
                    }
                );
            }).then(this.getDetailedInfo)
            .catch(error => {
                let toastID=null;

                if (!toast.isActive(toastID)) {
                    toastID = toast.error("Error Communicating with Fourquare!\n"+error,{
                        position: toast.POSITION.BOTTOM_RIGHT,
                        toastId:"FourSquareToast"});
                }
                }
            )
    };
    /**
     * Controls the animation for markers
     * @param marker :Marker to be used
     * @param li : Little trick to fool the method,helps for internal if.
     */
    animationControl = (marker, li = null) => {
        if (li !== null) {
            marker = this.state.markers.filter(//Gets all the  marker's name
                (filter) => {
                    if (filter.title === marker.name) {
                        return filter;
                    }
                }
            );
            marker = marker[0];
        }
        if (this.state.selectedMarker !== null && this.state.selectedMarker !== marker) {//If the selectedmarker isnt't
            this.state.selectedMarker.setAnimation(null);         // empty && is  not already selected
        }
        if (marker.getAnimation() !== null&& this.state.selectedMarker !== marker) {//If animation isn't equal to null
            marker.setAnimation(null); // Set animation to null
        } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);//Otherwise make animation bounce
        }
        this.setState({//Change selectedMarker to this marker
            selectedMarker: marker
        })
    };

    /**
     * Loads the script used to  render the map
     */
    renderMap = () => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${this.state.gmapAPI}&callback=initMap`);
        window.initMap = this.initMap;
    };
    /**
     * Initilize Google Maps elements needed for rendering
     */
    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {//Sets the parameters for the map
            center: {lat: 18.465518, lng: -66.116316},
            zoom: 15,
            clickableIcons: false
        });
        let infoWindow = new window.google.maps.InfoWindow({});//Initialize the InfoWindows
        let newArray = [];//holds the new array to be created
        this.state.venues.map((myVenue) => {
            if(myVenue===undefined)
            {return ""};

                //Gets all venues
                let contentString = `${myVenue.name}`;//Title on info Windows
                let marker = new window.google.maps.Marker({//Maps each marker
                    position: {
                        lat: myVenue.location.lat, lng: myVenue.location.lng //Sets the position
                    },
                    map: map,
                    animation: window.google.maps.Animation.DROP,
                    title: myVenue.name
                });
                marker.addListener('click', () => {
                    this.setInfoWindow(myVenue);
                    this.animationControl(marker);
                });
                newArray.push(marker);//Push all markers into an Array
                this.setState({//Set state references
                    markers: newArray,
                    infoWindow: infoWindow,
                    map: map
                });

                return true;
            }
        );
        window.google.maps.event.addListener(infoWindow, 'closeclick', () => {
            this.state.selectedMarker.setAnimation(null)
        });
    };
    setInfoWindow = (marker) => {
        let mapMarker = this.state.markers.filter(//Gets all the  marker's name
            (filter) => {
                if (filter.title === marker.name) {
                    return filter;
                }
            }
        );
        let venueSelected = this.state.venues.filter(
            (filter) => {
                if (filter.name === marker.name) {
                    return filter;
                }

            }
        );
        venueSelected = venueSelected[0];

        let content = `<div class="infoWindow">
<h1 class="venueName">${venueSelected.name}</h1>`;
        if (venueSelected) {
            if (venueSelected.bestPhoto.prefix !== undefined && venueSelected.bestPhoto.suffix) {//If there's a photo
                content += `<img src="${venueSelected.bestPhoto.prefix}original${venueSelected.bestPhoto.suffix}" alt=${venueSelected.name} class='iwImage'>`
            }
            if (venueSelected.hours !== undefined) {//If Hours are avaiable
                if (venueSelected.hours.timeframes[0].open[0].renderedTime) {
                    content += `<p class="venueTime">${venueSelected.hours.timeframes[0].open[0].renderedTime}</p>`;
                }
            }
            if (venueSelected.likes) {//If the place haves likes
                content += `<p class="venueLikes">${venueSelected.likes.summary}</p>`
            }
            if (venueSelected.rating) {// if there's any rating
                content += `<p class="venueRating">Rating: ${venueSelected.rating}`
            }
        }
        this.state.infoWindow.setContent(content);//Set the Content for the infoWindow to be the name of the venue
        this.state.infoWindow.open(this.state.map,//calls the infoWindows
            mapMarker[0])
    };
    render() {
        return (
            <div className={'Main-Container'}>
                <ErrorBoundary>
                <Menu markers={this.state.markers} venues={this.state.venues} infoWindow={this.state.infoWindow}
                      map={this.state.map} setInfoWindow={this.setInfoWindow} animationControl={this.animationControl}
                      updateQuery={this.updateQuery} selectedVenues={this.state.selectedVenues} hiddenStyle={this.state.hiddenStyle}
                      hiddenToggle={this.hiddenToggle}
                />
                </ErrorBoundary>
                <ErrorBoundary>
                <Map renderMap={this.renderMap} getVenues={this.getVenues}/>
                </ErrorBoundary>
                <ToastContainer/>

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
