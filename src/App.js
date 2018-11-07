import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Map from './Map.js'
import Menu from './Menu.js'
import Config from './config.js';
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

// Example : https://api.foursquare.com/v2/venues/4ca7f3bcf47ea143716f7021?client_id=543XCRHEDCJN5YQIZONCQ1NR0O3JWIYCFSWS4EKPPZMRPX3U&client_secret=GUAGXWWAQXHWBJQKLQ3QY5BIWXTF2VWBBHKX10QRLEIOGDBX&v=20180323
class App extends Component {
    state = {
        venues: [],// VEnues to be recieved with API
        map: {},// Reference to the map
        markers: [],//List of all markers on map
        infoWindow: {},//Reference to the infoWindows
        selectedMarker: null,//Reference to the currently selected marker
        client_id: Config.client_id,
        client_secret: Config.client_secret,
        gmapAPI: Config.gmapAPI,
        query:'',
        selectedVenues:''
    };
    updateQuery = (query) => {
        this.setState({ query: query.trim() },()=>{
            console.log(query);
            this.getQuery();
        })

    };
    getQuery=()=>
    {let {query}=this.state;
        console.log(query);
    if (this.state.query) {
        const match = new RegExp(escapeRegExp(query), 'i');
        let values=this.state.venues.filter((venue)=>{
            console.log(match);
            console.log("Name");
            console.log(venue.name);
           if (match.test(venue.name))
           {
               return venue;
           }

        });
        console.log(values);
    // this.sta = this.state..filter((contact) => match.test(contact.name))
   // } else {
        // showingContacts = contacts
    }
}

    clearQuery = () => {
        this.setState({ query: '' })
    };
    /**
     * Get's pictures from
     */
    getDetailedInfo = () => {

    let app = this;

        fetchDetails().then(
            (value) =>//TODO: Change venues to value when done
            {
                const debug = [

                    {
                        "id": "4b43ac78f964a520ede525e3",
                        "name": "El Batey",
                        "contact": {
                            "phone": "7877251787",
                            "formattedPhone": "(787) 725-1787"
                        },
                        "location": {
                            "address": "101 Cll Del Cristo",
                            "lat": 18.46636909758723,
                            "lng": -66.11822788537947,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.46636909758723,
                                    "lng": -66.11822788537947
                                }
                            ],
                            "postalCode": "00901",
                            "cc": "PR",
                            "city": "San Juan",
                            "state": "San Juan",
                            "country": "Puerto Rico",
                            "formattedAddress": [
                                "101 Cll Del Cristo",
                                "San Juan 00901",
                                "Puerto Rico"
                            ]
                        },
                        "canonicalUrl": "https://foursquare.com/v/el-batey/4b43ac78f964a520ede525e3",
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            },
                            {
                                "id": "4bf58dd8d48988d118941735",
                                "name": "Dive Bar",
                                "pluralName": "Dive Bars",
                                "shortName": "Dive Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/divebar_",
                                    "suffix": ".png"
                                }
                            },
                            {
                                "id": "4bf58dd8d48988d1d4941735",
                                "name": "Speakeasy",
                                "pluralName": "Speakeasies",
                                "shortName": "Speakeasy",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/secretbar_",
                                    "suffix": ".png"
                                }
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 46
                        },
                        "price": {
                            "tier": 2,
                            "message": "Moderate",
                            "currency": "$"
                        },
                        "likes": {
                            "count": 96,
                            "groups": [
                                {
                                    "type": "others",
                                    "count": 96,
                                    "items": []
                                }
                            ],
                            "summary": "96 Likes"
                        },
                        "dislike": false,
                        "ok": false,
                        "rating": 8.6,
                        "ratingColor": "73CF42",
                        "ratingSignals": 137,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "count": 0,
                            "unconfirmedCount": 0,
                            "marked": false,
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "photos": {
                            "count": 193,
                            "groups": [
                                {
                                    "type": "checkin",
                                    "name": "Friends' check-in photos",
                                    "count": 0,
                                    "items": []
                                },
                                {
                                    "type": "venue",
                                    "name": "Venue photos",
                                    "count": 193,
                                    "items": [
                                        {
                                            "id": "5150a226e4b07af15cedecad",
                                            "createdAt": 1364238886,
                                            "source": {
                                                "name": "Instagram",
                                                "url": "http://instagram.com"
                                            },
                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                            "suffix": "/10003020_P1ZepWZOt3Pw14fETqfWyv3R3vrdRpp4ju_r-GQeeig.jpg",
                                            "width": 612,
                                            "height": 612,
                                            "user": {
                                                "id": "10003020",
                                                "firstName": "Carl",
                                                "lastName": "Grooms",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/4ONMVT0BOBGN5FWY.jpg"
                                                }
                                            },
                                            "visibility": "public"
                                        }
                                    ]
                                }
                            ],
                            "summary": "0 photos"
                        },
                        "reasons": {
                            "count": 1,
                            "items": [
                                {
                                    "summary": "Lots of people like this place",
                                    "type": "general",
                                    "reasonName": "rawLikesReason"
                                }
                            ]
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "createdAt": 1262726264,
                        "tips": {
                            "count": 46,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "All tips",
                                    "count": 46,
                                    "items": [
                                        {
                                            "id": "4b43aca870c603bbba4e90b4",
                                            "createdAt": 1262726312,
                                            "text": "you could hit random numbers on the jukebox and it would still be great. leave your name on the wall in sharpie!",
                                            "type": "user",
                                            "canonicalUrl": "https://foursquare.com/item/4b43aca870c603bbba4e90b4",
                                            "lang": "en",
                                            "likes": {
                                                "count": 7,
                                                "groups": [
                                                    {
                                                        "type": "others",
                                                        "count": 7,
                                                        "items": [
                                                            {
                                                                "id": "122621883",
                                                                "firstName": "Richard",
                                                                "lastName": "Smith",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/122621883-GZEAXEHBUBRTEL5A.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "33089",
                                                                "firstName": "Ethan",
                                                                "lastName": "Mane",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/KQSA2BOOQCBGHR5V.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "1661",
                                                                "firstName": "noel",
                                                                "lastName": "hidalgo",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/HCVDBHZKU3GWUAAG.jpg"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "summary": "7 likes"
                                            },
                                            "logView": true,
                                            "agreeCount": 3,
                                            "disagreeCount": 0,
                                            "todo": {
                                                "count": 2
                                            },
                                            "user": {
                                                "id": "1293",
                                                "firstName": "jenni",
                                                "lastName": "konrad",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/L0VKT04CFULTHC4M.jpg"
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "shortUrl": "http://4sq.com/5UqR8L",
                        "timeZone": "America/Puerto_Rico",
                        "listed": {
                            "count": 136,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Lists from other people",
                                    "count": 136,
                                    "items": [
                                        {
                                            "id": "4ec6a031e5fa232a741dc482",
                                            "name": "Bar Hopping In Old San Juan",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "12742786",
                                                "firstName": "Ramón",
                                                "lastName": "Rodríguez Agosto",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/12742786-02MOVMRLIEUV4A11.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/ramrodago/list/bar-hopping-in-old-san-juan",
                                            "canonicalUrl": "https://foursquare.com/ramrodago/list/bar-hopping-in-old-san-juan",
                                            "createdAt": 1321639985,
                                            "updatedAt": 1334604903,
                                            "photo": {
                                                "id": "4eceea3a722e01c5809bd2ea",
                                                "createdAt": 1322183226,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/WX4E4XEOARFVDTGWL3BTZQLSEH4L2YF0INS2DK3N2JHYLRYH.jpg",
                                                "width": 460,
                                                "height": 345,
                                                "user": {
                                                    "id": "12742786",
                                                    "firstName": "Ramón",
                                                    "lastName": "Rodríguez Agosto",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/12742786-02MOVMRLIEUV4A11.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 22
                                            },
                                            "listItems": {
                                                "count": 19,
                                                "items": [
                                                    {
                                                        "id": "v4b43ac78f964a520ede525e3",
                                                        "createdAt": 1321827073,
                                                        "photo": {
                                                            "id": "4ec894a8b8f758db759957f3",
                                                            "createdAt": 1321768104,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/IHGMKPVWBYR40FMCARQJN1ADQ4DXLM1FQWE21ZEXVX3WYFZO.jpg",
                                                            "width": 537,
                                                            "height": 720,
                                                            "user": {
                                                                "id": "16474310",
                                                                "firstName": "Robin",
                                                                "lastName": "Burr",
                                                                "gender": "female",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/XGY1WBMYPEKGIQ3J.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "4e4e8b6f1fc7e04d29e2259a",
                                            "name": "I Like the Nightlife, Baby",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "14157",
                                                "firstName": "Lindsey",
                                                "lastName": "L",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/YC22SFJ510BJC5PS.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/lindseylanpher/list/i-like-the-nightlife-baby",
                                            "canonicalUrl": "https://foursquare.com/lindseylanpher/list/i-like-the-nightlife-baby",
                                            "createdAt": 1313770351,
                                            "updatedAt": 1469657760,
                                            "photo": {
                                                "id": "51f9ac38498e137620db3f13",
                                                "createdAt": 1375317048,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/14157_Iys1v279tpNQYCRx8BFNg7WiN0EXE894JJFvalhB7I4.jpg",
                                                "width": 720,
                                                "height": 960,
                                                "user": {
                                                    "id": "14157",
                                                    "firstName": "Lindsey",
                                                    "lastName": "L",
                                                    "gender": "female",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/YC22SFJ510BJC5PS.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 30
                                            },
                                            "listItems": {
                                                "count": 154,
                                                "items": [
                                                    {
                                                        "id": "v4b43ac78f964a520ede525e3",
                                                        "createdAt": 1375642066
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "4ecd23c3b8f7cc0321ddcb1c",
                                            "name": "Places I still need to check out",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "31534",
                                                "firstName": "Holger",
                                                "lastName": "Luedorf",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/QUUZEGVHPZMSZ4X2.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/holger/list/places-i-still-need-to-check-out",
                                            "canonicalUrl": "https://foursquare.com/holger/list/places-i-still-need-to-check-out",
                                            "createdAt": 1322066883,
                                            "updatedAt": 1517001994,
                                            "photo": {
                                                "id": "4f7f811ce4b007a6646c7e3d",
                                                "createdAt": 1333756188,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/TsYoWvax4_Cs2s5OmQw2ejmuAc1V1wCTHHu3BlL8T1o.jpg",
                                                "width": 540,
                                                "height": 720,
                                                "user": {
                                                    "id": "6930126",
                                                    "firstName": "shinya",
                                                    "lastName": "aizawa",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/3HAXKJDY15NQR1DY.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 25
                                            },
                                            "listItems": {
                                                "count": 220,
                                                "items": [
                                                    {
                                                        "id": "v4b43ac78f964a520ede525e3",
                                                        "createdAt": 1365802471,
                                                        "photo": {
                                                            "id": "513e4e69e4b03181e13fd71b",
                                                            "createdAt": 1363037801,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/1512813_U3NP60Y2hyJCBzlFFWNGc0USZAGSwP-f48lN6bub0ek.jpg",
                                                            "width": 612,
                                                            "height": 612,
                                                            "user": {
                                                                "id": "1512813",
                                                                "firstName": "Andreas",
                                                                "lastName": "K",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/KT4UA422NFW021H4.png"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "4ff99dc1e4b0ae40ee127f3d",
                                            "name": "Puerto Rico",
                                            "description": "Locals-approved.",
                                            "type": "others",
                                            "user": {
                                                "id": "25309",
                                                "firstName": "Guillo",
                                                "lastName": "...",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/25309-2VUF24KTAYL3AW5U.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/25309/list/puerto-rico",
                                            "canonicalUrl": "https://foursquare.com/user/25309/list/puerto-rico",
                                            "createdAt": 1341758913,
                                            "updatedAt": 1487026670,
                                            "photo": {
                                                "id": "50bb5671e4b01cb32bd1affb",
                                                "createdAt": 1354454641,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/2565177_qSu8QsuWwpInkIz1oo_6d4-DXu26DOe-n7emxICF2bw.jpg",
                                                "width": 540,
                                                "height": 720,
                                                "user": {
                                                    "id": "2565177",
                                                    "firstName": "Marcella",
                                                    "lastName": "Kovac",
                                                    "gender": "female",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/2565177-FDYQTJ5VZFDBESXV.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 9
                                            },
                                            "listItems": {
                                                "count": 63,
                                                "items": [
                                                    {
                                                        "id": "v4b43ac78f964a520ede525e3",
                                                        "createdAt": 1371157678
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "hours": {
                            "status": "Closed until 4:00 PM",
                            "richStatus": {
                                "entities": [],
                                "text": "Closed until 4:00 PM"
                            },
                            "isOpen": false,
                            "isLocalHoliday": false,
                            "dayData": [],
                            "timeframes": [
                                {
                                    "days": "Sat–Sun",
                                    "includesToday": true,
                                    "open": [
                                        {
                                            "renderedTime": "4:00 PM–4:30 AM"
                                        }
                                    ],
                                    "segments": []
                                }
                            ]
                        },
                        "pageUpdates": {
                            "count": 0,
                            "items": []
                        },
                        "inbox": {
                            "count": 0,
                            "items": []
                        },
                        "attributes": {
                            "groups": [
                                {
                                    "type": "price",
                                    "name": "Price",
                                    "summary": "$$",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Price",
                                            "displayValue": "$$",
                                            "priceTier": 2
                                        }
                                    ]
                                },
                                {
                                    "type": "payments",
                                    "name": "Credit Cards",
                                    "summary": "Credit Cards",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Credit Cards",
                                            "displayValue": "Yes"
                                        }
                                    ]
                                },
                                {
                                    "type": "outdoorSeating",
                                    "name": "Outdoor Seating",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Outdoor Seating",
                                            "displayValue": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "wifi",
                                    "name": "Wi-Fi",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Wi-Fi",
                                            "displayValue": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "drinks",
                                    "name": "Drinks",
                                    "summary": "Beer & Full Bar",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Beer",
                                            "displayValue": "Beer"
                                        },
                                        {
                                            "displayName": "Full Bar",
                                            "displayValue": "Full Bar"
                                        }
                                    ]
                                },
                                {
                                    "type": "smoking",
                                    "name": "Smoking",
                                    "summary": "Smoking",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Smoking",
                                            "displayValue": "Yes"
                                        }
                                    ]
                                }
                            ]
                        },
                        "bestPhoto": {
                            "id": "5150a226e4b07af15cedecad",
                            "createdAt": 1364238886,
                            "source": {
                                "name": "Instagram",
                                "url": "http://instagram.com"
                            },
                            "prefix": "https://fastly.4sqi.net/img/general/",
                            "suffix": "/10003020_P1ZepWZOt3Pw14fETqfWyv3R3vrdRpp4ju_r-GQeeig.jpg",
                            "width": 612,
                            "height": 612,
                            "visibility": "public"
                        },
                        "colors": {
                            "highlightColor": {
                                "photoId": "5150a226e4b07af15cedecad",
                                "value": -988968
                            },
                            "highlightTextColor": {
                                "photoId": "5150a226e4b07af15cedecad",
                                "value": -16777216
                            },
                            "algoVersion": 3
                        }
                    }

                    ,
                    {
                        "id": "4ca7f3bcf47ea143716f7021",
                        "name": "La Taberna Lúpulo",
                        "contact": {
                            "phone": "7877213772",
                            "formattedPhone": "(787) 721-3772"
                        },
                        "location": {
                            "address": "151 Cll. San Sebastian",
                            "crossStreet": "Plaza Del Mercado",
                            "lat": 18.467380561320827,
                            "lng": -66.1173591167178,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.467380561320827,
                                    "lng": -66.1173591167178
                                }
                            ],
                            "postalCode": "00901",
                            "cc": "PR",
                            "city": "San Juan",
                            "state": "San Juan",
                            "country": "Puerto Rico",
                            "formattedAddress": [
                                "151 Cll. San Sebastian (Plaza Del Mercado)",
                                "San Juan 00901",
                                "Puerto Rico"
                            ]
                        },
                        "canonicalUrl": "https://foursquare.com/v/la-taberna-l%C3%BApulo/4ca7f3bcf47ea143716f7021",
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d117941735",
                                "name": "Beer Garden",
                                "pluralName": "Beer Gardens",
                                "shortName": "Beer Garden",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 93
                        },
                        "url": "http://latabernalupulo.com",
                        "price": {
                            "tier": 2,
                            "message": "Moderate",
                            "currency": "$"
                        },
                        "likes": {
                            "count": 353,
                            "groups": [
                                {
                                    "type": "others",
                                    "count": 353,
                                    "items": []
                                }
                            ],
                            "summary": "353 Likes"
                        },
                        "dislike": false,
                        "ok": false,
                        "rating": 8.9,
                        "ratingColor": "73CF42",
                        "ratingSignals": 469,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "count": 0,
                            "unconfirmedCount": 0,
                            "marked": false,
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "photos": {
                            "count": 776,
                            "groups": [
                                {
                                    "type": "checkin",
                                    "name": "Friends' check-in photos",
                                    "count": 0,
                                    "items": []
                                },
                                {
                                    "type": "venue",
                                    "name": "Venue photos",
                                    "count": 776,
                                    "items": [
                                        {
                                            "id": "501885a1e4b0c9f5718aff52",
                                            "createdAt": 1343784353,
                                            "source": {
                                                "name": "Instagram",
                                                "url": "http://instagram.com"
                                            },
                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                            "suffix": "/jRsD9bN-XlFRbNZo9T9B4o7yKo4Vi1ZqmPaH5KNowws.jpg",
                                            "width": 612,
                                            "height": 612,
                                            "user": {
                                                "id": "8062683",
                                                "firstName": "Amanda",
                                                "lastName": "Iseri",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/PR0Z3NFMCHP10ZXA.jpg"
                                                }
                                            },
                                            "visibility": "public"
                                        }
                                    ]
                                }
                            ],
                            "summary": "0 photos"
                        },
                        "reasons": {
                            "count": 1,
                            "items": [
                                {
                                    "summary": "Lots of people like this place",
                                    "type": "general",
                                    "reasonName": "rawLikesReason"
                                }
                            ]
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "createdAt": 1286075324,
                        "tips": {
                            "count": 93,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "All tips",
                                    "count": 93,
                                    "items": [
                                        {
                                            "id": "50630797e4b0d45e52d5a71a",
                                            "createdAt": 1348667287,
                                            "text": "Bar with a variety of tap beers from around the world. Good music and not to much food.",
                                            "type": "user",
                                            "canonicalUrl": "https://foursquare.com/item/50630797e4b0d45e52d5a71a",
                                            "lang": "en",
                                            "likes": {
                                                "count": 7,
                                                "groups": [
                                                    {
                                                        "type": "others",
                                                        "count": 7,
                                                        "items": [
                                                            {
                                                                "id": "3007749",
                                                                "firstName": "Chris",
                                                                "lastName": "Gibson",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/3007749_KQgAj6Mg_e1wapLvIycvtVuC4D3lW3hHbDupSvI0buZwx6oYg4iHXmhMrhGK7Ba1DFIFS2Asl.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "345417",
                                                                "firstName": "Jaime",
                                                                "lastName": "Díaz",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/345417_-fgRrWNt_JcoGDuKcp3tfBe5gs49oaA3NTnExrbhUU2miN_EKw2ctumfNwgaR5LQYC6YR_3MN.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "92507546",
                                                                "firstName": "Giselle",
                                                                "lastName": "Isali",
                                                                "gender": "female",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/92507546-1BTZMHI1YIAISPIW.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "83927048",
                                                                "firstName": "Doralyz",
                                                                "lastName": "Camacho",
                                                                "gender": "female",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/blank_girl.png",
                                                                    "default": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "summary": "7 likes"
                                            },
                                            "logView": true,
                                            "agreeCount": 7,
                                            "disagreeCount": 0,
                                            "todo": {
                                                "count": 0
                                            },
                                            "user": {
                                                "id": "36437942",
                                                "firstName": "Melina",
                                                "lastName": "Aponte Gomez",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/36437942_NiOqPvCl_DLx0I2CcfDXy9M0EARLGo0b-DSyFe88rrzLwaHJR67EMTYIa-kuRWihd22byJsyu.jpg"
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "shortUrl": "http://4sq.com/bebBbn",
                        "timeZone": "America/Puerto_Rico",
                        "listed": {
                            "count": 192,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Lists from other people",
                                    "count": 192,
                                    "items": [
                                        {
                                            "id": "4ec6a031e5fa232a741dc482",
                                            "name": "Bar Hopping In Old San Juan",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "12742786",
                                                "firstName": "Ramón",
                                                "lastName": "Rodríguez Agosto",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/12742786-02MOVMRLIEUV4A11.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/ramrodago/list/bar-hopping-in-old-san-juan",
                                            "canonicalUrl": "https://foursquare.com/ramrodago/list/bar-hopping-in-old-san-juan",
                                            "createdAt": 1321639985,
                                            "updatedAt": 1334604903,
                                            "photo": {
                                                "id": "4eceea3a722e01c5809bd2ea",
                                                "createdAt": 1322183226,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/WX4E4XEOARFVDTGWL3BTZQLSEH4L2YF0INS2DK3N2JHYLRYH.jpg",
                                                "width": 460,
                                                "height": 345,
                                                "user": {
                                                    "id": "12742786",
                                                    "firstName": "Ramón",
                                                    "lastName": "Rodríguez Agosto",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/12742786-02MOVMRLIEUV4A11.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 22
                                            },
                                            "listItems": {
                                                "count": 19,
                                                "items": [
                                                    {
                                                        "id": "v4ca7f3bcf47ea143716f7021",
                                                        "createdAt": 1321639985,
                                                        "photo": {
                                                            "id": "4f43fd81e4b0d0fdea02ba96",
                                                            "createdAt": 1329855873,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/L1Y2p1xaK7ORqs70GoEkLzQBJBIX_m2hzHjRZS5FwtU.jpg",
                                                            "width": 460,
                                                            "height": 345,
                                                            "user": {
                                                                "id": "12742786",
                                                                "firstName": "Ramón",
                                                                "lastName": "Rodríguez Agosto",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/12742786-02MOVMRLIEUV4A11.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "50c68eebe4b0cbcf0712fabb",
                                            "name": "Puerto Rico",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "22679231",
                                                "firstName": "Josh",
                                                "lastName": "Stiefel",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/ALSNC41REXFJTFDX.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/22679231/list/puerto-rico",
                                            "canonicalUrl": "https://foursquare.com/user/22679231/list/puerto-rico",
                                            "createdAt": 1355189995,
                                            "updatedAt": 1431996544,
                                            "followers": {
                                                "count": 7
                                            },
                                            "listItems": {
                                                "count": 22,
                                                "items": [
                                                    {
                                                        "id": "v4ca7f3bcf47ea143716f7021",
                                                        "createdAt": 1355190951
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "50dca1cde4b057fed168e705",
                                            "name": "Must Go's in Puerto Rico",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "8698381",
                                                "firstName": "Bebo",
                                                "lastName": "González",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/8698381-4152K0UWBYRKZJMM.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/8698381/list/must-gos-in-puerto-rico",
                                            "canonicalUrl": "https://foursquare.com/user/8698381/list/must-gos-in-puerto-rico",
                                            "createdAt": 1356636621,
                                            "updatedAt": 1458968005,
                                            "photo": {
                                                "id": "5410631811d2cfacffefb7bb",
                                                "createdAt": 1410360088,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/9930647_pwq5eiYaq1DBKzfU5yLg-dB9RiL7bXsnul2YyCGbEcA.jpg",
                                                "width": 1759,
                                                "height": 1438,
                                                "user": {
                                                    "id": "9930647",
                                                    "firstName": "The Ritz-Carlton",
                                                    "gender": "none",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/9930647-YM1OXNBEFTL4UZHW.jpg"
                                                    },
                                                    "type": "chain"
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 12
                                            },
                                            "listItems": {
                                                "count": 98,
                                                "items": [
                                                    {
                                                        "id": "v4ca7f3bcf47ea143716f7021",
                                                        "createdAt": 1369630393
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "4fa46fc6e4b08e1f881c7baa",
                                            "name": "Favorite Places From a Year in Puerto Rico",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "27375695",
                                                "firstName": "Nicole",
                                                "lastName": "Ziemlak",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/blank_girl.png",
                                                    "default": true
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/nicoleziemlak/list/favorite-places-from-a-year-in-puerto-rico",
                                            "canonicalUrl": "https://foursquare.com/nicoleziemlak/list/favorite-places-from-a-year-in-puerto-rico",
                                            "createdAt": 1336176582,
                                            "updatedAt": 1362628404,
                                            "followers": {
                                                "count": 7
                                            },
                                            "listItems": {
                                                "count": 15,
                                                "items": [
                                                    {
                                                        "id": "v4ca7f3bcf47ea143716f7021",
                                                        "createdAt": 1336176621
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "hours": {
                            "status": "Open until 2:00 AM",
                            "richStatus": {
                                "entities": [],
                                "text": "Open until 2:00 AM"
                            },
                            "isOpen": true,
                            "isLocalHoliday": false,
                            "dayData": [],
                            "timeframes": [
                                {
                                    "days": "Mon–Fri",
                                    "open": [
                                        {
                                            "renderedTime": "6:00 PM–2:00 AM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Sat–Sun",
                                    "includesToday": true,
                                    "open": [
                                        {
                                            "renderedTime": "3:00 PM–2:00 AM"
                                        }
                                    ],
                                    "segments": []
                                }
                            ]
                        },
                        "popular": {
                            "status": "Likely open",
                            "richStatus": {
                                "entities": [],
                                "text": "Likely open"
                            },
                            "isOpen": true,
                            "isLocalHoliday": false,
                            "timeframes": [
                                {
                                    "days": "Today",
                                    "includesToday": true,
                                    "open": [
                                        {
                                            "renderedTime": "2:00 PM–3:00 AM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Sun",
                                    "open": [
                                        {
                                            "renderedTime": "2:00 PM–1:00 AM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Mon–Tue",
                                    "open": [
                                        {
                                            "renderedTime": "6:00 PM–Midnight"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Wed",
                                    "open": [
                                        {
                                            "renderedTime": "6:00 PM–1:00 AM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Thu",
                                    "open": [
                                        {
                                            "renderedTime": "6:00 PM–2:00 AM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Fri",
                                    "open": [
                                        {
                                            "renderedTime": "6:00 PM–3:00 AM"
                                        }
                                    ],
                                    "segments": []
                                }
                            ]
                        },
                        "pageUpdates": {
                            "count": 0,
                            "items": []
                        },
                        "inbox": {
                            "count": 0,
                            "items": []
                        },
                        "attributes": {
                            "groups": [
                                {
                                    "type": "price",
                                    "name": "Price",
                                    "summary": "$$",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Price",
                                            "displayValue": "$$",
                                            "priceTier": 2
                                        }
                                    ]
                                },
                                {
                                    "type": "payments",
                                    "name": "Credit Cards",
                                    "summary": "Credit Cards",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Credit Cards",
                                            "displayValue": "Yes (incl. American Express)"
                                        }
                                    ]
                                },
                                {
                                    "type": "outdoorSeating",
                                    "name": "Outdoor Seating",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Outdoor Seating",
                                            "displayValue": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "wifi",
                                    "name": "Wi-Fi",
                                    "summary": "Wi-Fi",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Wi-Fi",
                                            "displayValue": "Yes"
                                        }
                                    ]
                                },
                                {
                                    "type": "serves",
                                    "name": "Menus",
                                    "summary": "Dinner & Happy Hour",
                                    "count": 8,
                                    "items": [
                                        {
                                            "displayName": "Dinner",
                                            "displayValue": "Dinner"
                                        },
                                        {
                                            "displayName": "Happy Hour",
                                            "displayValue": "Happy Hour"
                                        }
                                    ]
                                },
                                {
                                    "type": "drinks",
                                    "name": "Drinks",
                                    "summary": "Beer, Full Bar & Cocktails",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Beer",
                                            "displayValue": "Beer"
                                        },
                                        {
                                            "displayName": "Full Bar",
                                            "displayValue": "Full Bar"
                                        },
                                        {
                                            "displayName": "Cocktails",
                                            "displayValue": "Cocktails"
                                        }
                                    ]
                                }
                            ]
                        },
                        "bestPhoto": {
                            "id": "501885a1e4b0c9f5718aff52",
                            "createdAt": 1343784353,
                            "source": {
                                "name": "Instagram",
                                "url": "http://instagram.com"
                            },
                            "prefix": "https://fastly.4sqi.net/img/general/",
                            "suffix": "/jRsD9bN-XlFRbNZo9T9B4o7yKo4Vi1ZqmPaH5KNowws.jpg",
                            "width": 612,
                            "height": 612,
                            "visibility": "public"
                        },
                        "colors": {
                            "highlightColor": {
                                "photoId": "501885a1e4b0c9f5718aff52",
                                "value": -15722472
                            },
                            "highlightTextColor": {
                                "photoId": "501885a1e4b0c9f5718aff52",
                                "value": -1
                            },
                            "algoVersion": 3
                        }

                    }
                    , {
                        "id": "4be6423abcef2d7f7c0a05e5",
                        "name": "La Cubanita",
                        "contact": {},
                        "location": {
                            "address": "Calle San José #51",
                            "lat": 18.46713723987716,
                            "lng": -66.11755791210099,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.46713723987716,
                                    "lng": -66.11755791210099
                                }
                            ],
                            "cc": "PR",
                            "state": "San Juan",
                            "country": "Puerto Rico",
                            "formattedAddress": [
                                "Calle San José #51",
                                "Viejo San Juan",
                                "Puerto Rico"
                            ]
                        },
                        "canonicalUrl": "https://foursquare.com/v/la-cubanita/4be6423abcef2d7f7c0a05e5",
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13
                        },
                        "price": {
                            "tier": 2,
                            "message": "Moderate",
                            "currency": "$"
                        },
                        "likes": {
                            "count": 54,
                            "groups": [
                                {
                                    "type": "others",
                                    "count": 54,
                                    "items": []
                                }
                            ],
                            "summary": "54 Likes"
                        },
                        "dislike": false,
                        "ok": false,
                        "rating": 8.8,
                        "ratingColor": "73CF42",
                        "ratingSignals": 64,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "count": 0,
                            "unconfirmedCount": 0,
                            "marked": false,
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "photos": {
                            "count": 41,
                            "groups": [
                                {
                                    "type": "checkin",
                                    "name": "Friends' check-in photos",
                                    "count": 0,
                                    "items": []
                                },
                                {
                                    "type": "venue",
                                    "name": "Venue photos",
                                    "count": 41,
                                    "items": [
                                        {
                                            "id": "5216df0f11d29771683c271a",
                                            "createdAt": 1377230607,
                                            "source": {
                                                "name": "Instagram",
                                                "url": "http://instagram.com"
                                            },
                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                            "suffix": "/5849690_z5yF1w7UeiUqInbiAv8Njx6IC5Dy_tHhp3hgjNfIvxA.jpg",
                                            "width": 612,
                                            "height": 612,
                                            "user": {
                                                "id": "5849690",
                                                "firstName": "Jotæle",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/N0QIWN4GVZVRZ25K.jpg"
                                                }
                                            },
                                            "visibility": "public"
                                        }
                                    ]
                                }
                            ],
                            "summary": "0 photos"
                        },
                        "reasons": {
                            "count": 1,
                            "items": [
                                {
                                    "summary": "Lots of people like this place",
                                    "type": "general",
                                    "reasonName": "rawLikesReason"
                                }
                            ]
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "createdAt": 1273381434,
                        "tips": {
                            "count": 13,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "All tips",
                                    "count": 13,
                                    "items": [
                                        {
                                            "id": "55fcc1bb498e633efcea903f",
                                            "createdAt": 1442628027,
                                            "text": "A remodelado completamente. Ahora cuenta con más espacio, una barrita bien chic, cocktails, the whole thing. Los precios subieron pero $9 por Tanqueray con jugo de toronja, Is good in my book!",
                                            "type": "user",
                                            "canonicalUrl": "https://foursquare.com/item/55fcc1bb498e633efcea903f",
                                            "lang": "es",
                                            "likes": {
                                                "count": 1,
                                                "groups": [
                                                    {
                                                        "type": "others",
                                                        "count": 1,
                                                        "items": [
                                                            {
                                                                "id": "128881969",
                                                                "firstName": "Andres",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/128881969-LENZ5UELWB1BVGHX.jpg"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "summary": "1 like"
                                            },
                                            "logView": true,
                                            "agreeCount": 2,
                                            "disagreeCount": 0,
                                            "todo": {
                                                "count": 0
                                            },
                                            "user": {
                                                "id": "124255837",
                                                "firstName": "Kenly",
                                                "lastName": "H.",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/124255837-VTSXESBGNEFMMZ0F.jpg"
                                                }
                                            },
                                            "authorInteractionType": "liked"
                                        }
                                    ]
                                }
                            ]
                        },
                        "shortUrl": "http://4sq.com/a0DCkX",
                        "timeZone": "America/Puerto_Rico",
                        "listed": {
                            "count": 31,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Lists from other people",
                                    "count": 31,
                                    "items": [
                                        {
                                            "id": "591dd2d179f6c751fa4798d8",
                                            "name": "Unexpected, Affordable Summertime Destinations",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "23438729",
                                                "firstName": "Foursquare City Guide",
                                                "gender": "none",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/23438729-TODURDIUDUMY4JF5.png"
                                                },
                                                "type": "page"
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/foursquare/list/unexpected-affordable-summertime-destinations",
                                            "canonicalUrl": "https://foursquare.com/foursquare/list/unexpected-affordable-summertime-destinations",
                                            "createdAt": 1495126737,
                                            "updatedAt": 1495130512,
                                            "photo": {
                                                "id": "56b2f8d9498ea0d48f2a42ff",
                                                "createdAt": 1454569689,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/154537762_7hxJRf6ramTcbvu6bPWIN1hk-b9EHcHDXSwuH-0hmCI.jpg",
                                                "width": 1280,
                                                "height": 720,
                                                "user": {
                                                    "id": "154537762",
                                                    "firstName": "Four Seasons Resort in Scottsdale",
                                                    "gender": "none",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/154537762-AUPH1DSL2ITXGCMG.png"
                                                    },
                                                    "type": "venuePage",
                                                    "venue": {
                                                        "id": "4b203dbaf964a520382f24e3"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "logView": true,
                                            "followers": {
                                                "count": 11
                                            },
                                            "listItems": {
                                                "count": 20,
                                                "items": [
                                                    {
                                                        "id": "t57127015498e376c8d70e10a",
                                                        "createdAt": 1495130228,
                                                        "photo": {
                                                            "id": "57028e8c498e4709a8833058",
                                                            "createdAt": 1459785356,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/43996731_0AueXDvyDwyk1EyvLOsgUz06bnY4Tbb1RmYRuPsIubc.jpg",
                                                            "width": 1920,
                                                            "height": 1440,
                                                            "user": {
                                                                "id": "43996731",
                                                                "firstName": "Yejin",
                                                                "lastName": "Mun",
                                                                "gender": "female",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/TY3E1QN5XCEC1Z2V.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "589b5791c9602706f64c682c",
                                            "name": "San Juan, PR",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "1987543",
                                                "firstName": "Michelle",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/1987543-1QPF1U3ZR1M1XIMH.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/corderom11/list/san-juan-pr",
                                            "canonicalUrl": "https://foursquare.com/corderom11/list/san-juan-pr",
                                            "createdAt": 1486575505,
                                            "updatedAt": 1488054977,
                                            "photo": {
                                                "id": "51ce506d498ebdda42d7b576",
                                                "createdAt": 1372475501,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/25918776_EvalEwdQ5KFLY8xmJ28oXqAVFqJj9zqdfFijEp28MMU.jpg",
                                                "width": 720,
                                                "height": 720,
                                                "user": {
                                                    "id": "25918776",
                                                    "firstName": "Karin",
                                                    "gender": "female",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/25918776-IFWGX3MVFPJXNTEH.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 1
                                            },
                                            "listItems": {
                                                "count": 19,
                                                "items": [
                                                    {
                                                        "id": "v4be6423abcef2d7f7c0a05e5",
                                                        "createdAt": 1486575718
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "58ab49bcd439077b89db96ad",
                                            "name": "PR for Friends",
                                            "description": "Must gos in PR",
                                            "type": "others",
                                            "user": {
                                                "id": "39384879",
                                                "firstName": "Natalie",
                                                "lastName": "Cotto Castro",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/0MUMQSIU4U21WPSO.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/39384879/list/pr-for-friends",
                                            "canonicalUrl": "https://foursquare.com/user/39384879/list/pr-for-friends",
                                            "createdAt": 1487620540,
                                            "updatedAt": 1490556696,
                                            "followers": {
                                                "count": 1
                                            },
                                            "listItems": {
                                                "count": 25,
                                                "items": [
                                                    {
                                                        "id": "v4be6423abcef2d7f7c0a05e5",
                                                        "createdAt": 1490298619
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "548328fd498e39d97a82d96a",
                                            "name": "Puerto Rico",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "21563126",
                                                "firstName": "Richard",
                                                "lastName": "Revilla",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/21563126_v05J1KPw_SVj6Ehq9g8B9jeAGjFUMsU5QGl-NZ8inUQ7pKQm5bKplW37EmR7jS2A7GYPBBAtl.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/rickr7/list/puerto-rico",
                                            "canonicalUrl": "https://foursquare.com/rickr7/list/puerto-rico",
                                            "createdAt": 1417881853,
                                            "updatedAt": 1517540074,
                                            "photo": {
                                                "id": "51268223e4b039de2ea4eae8",
                                                "createdAt": 1361478179,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/15586020_VtEFz63of61SWHoVF6UVM_8V-s2vjHTd3j3l01B-fTg.jpg",
                                                "width": 720,
                                                "height": 960,
                                                "user": {
                                                    "id": "15586020",
                                                    "firstName": "Roberto",
                                                    "lastName": "Butler",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/ZYPQZHT4ZZLKSFZX.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 2
                                            },
                                            "listItems": {
                                                "count": 74,
                                                "items": [
                                                    {
                                                        "id": "v4be6423abcef2d7f7c0a05e5",
                                                        "createdAt": 1509878658
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "pageUpdates": {
                            "count": 0,
                            "items": []
                        },
                        "inbox": {
                            "count": 0,
                            "items": []
                        },
                        "attributes": {
                            "groups": [
                                {
                                    "type": "price",
                                    "name": "Price",
                                    "summary": "$$",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Price",
                                            "displayValue": "$$",
                                            "priceTier": 2
                                        }
                                    ]
                                },
                                {
                                    "type": "outdoorSeating",
                                    "name": "Outdoor Seating",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Outdoor Seating",
                                            "displayValue": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "serves",
                                    "name": "Menus",
                                    "summary": "Happy Hour",
                                    "count": 8,
                                    "items": [
                                        {
                                            "displayName": "Happy Hour",
                                            "displayValue": "Happy Hour"
                                        }
                                    ]
                                },
                                {
                                    "type": "drinks",
                                    "name": "Drinks",
                                    "summary": "Beer, Full Bar & Cocktails",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Beer",
                                            "displayValue": "Beer"
                                        },
                                        {
                                            "displayName": "Full Bar",
                                            "displayValue": "Full Bar"
                                        },
                                        {
                                            "displayName": "Cocktails",
                                            "displayValue": "Cocktails"
                                        }
                                    ]
                                }
                            ]
                        },
                        "bestPhoto": {
                            "id": "5216df0f11d29771683c271a",
                            "createdAt": 1377230607,
                            "source": {
                                "name": "Instagram",
                                "url": "http://instagram.com"
                            },
                            "prefix": "https://fastly.4sqi.net/img/general/",
                            "suffix": "/5849690_z5yF1w7UeiUqInbiAv8Njx6IC5Dy_tHhp3hgjNfIvxA.jpg",
                            "width": 612,
                            "height": 612,
                            "visibility": "public"
                        },
                        "colors": {
                            "highlightColor": {
                                "photoId": "5216df0f11d29771683c271a",
                                "value": -15724528
                            },
                            "highlightTextColor": {
                                "photoId": "5216df0f11d29771683c271a",
                                "value": -1
                            },
                            "algoVersion": 3
                        }
                    }

                    , {
                        "id": "545aa9bd498e7c33c35be2a0",
                        "name": "Birra y Empanadas",
                        "contact": {},
                        "location": {
                            "lat": 18.465879,
                            "lng": -66.116404,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.465879,
                                    "lng": -66.116404
                                }
                            ],
                            "cc": "PR",
                            "country": "Puerto Rico",
                            "formattedAddress": [
                                "Puerto Rico"
                            ]
                        },
                        "canonicalUrl": "https://foursquare.com/v/birra-y-empanadas/545aa9bd498e7c33c35be2a0",
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4
                        },
                        "price": {
                            "tier": 2,
                            "message": "Moderate",
                            "currency": "$"
                        },
                        "likes": {
                            "count": 23,
                            "groups": [
                                {
                                    "type": "others",
                                    "count": 23,
                                    "items": []
                                }
                            ],
                            "summary": "23 Likes"
                        },
                        "dislike": false,
                        "ok": false,
                        "rating": 8.4,
                        "ratingColor": "73CF42",
                        "ratingSignals": 28,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "count": 0,
                            "unconfirmedCount": 0,
                            "marked": false,
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "photos": {
                            "count": 14,
                            "groups": [
                                {
                                    "type": "checkin",
                                    "name": "Friends' check-in photos",
                                    "count": 0,
                                    "items": []
                                },
                                {
                                    "type": "venue",
                                    "name": "Venue photos",
                                    "count": 14,
                                    "items": [
                                        {
                                            "id": "5851a774e309e14065c37252",
                                            "createdAt": 1481746292,
                                            "source": {
                                                "name": "Swarm for iOS",
                                                "url": "https://www.swarmapp.com"
                                            },
                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                            "suffix": "/450301_fIma7lHmr56UrLprB7ZuNOz2GUza15BL6udl7oRUVlM.jpg",
                                            "width": 1920,
                                            "height": 1440,
                                            "user": {
                                                "id": "450301",
                                                "firstName": "Ryan",
                                                "lastName": "Black",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/CAP2THS20BMO0R1L.jpg"
                                                }
                                            },
                                            "visibility": "public"
                                        }
                                    ]
                                }
                            ],
                            "summary": "0 photos"
                        },
                        "reasons": {
                            "count": 0,
                            "items": []
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "createdAt": 1415227837,
                        "tips": {
                            "count": 4,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "All tips",
                                    "count": 4,
                                    "items": [
                                        {
                                            "id": "5afb82c3f62f2b0ab7beb627",
                                            "createdAt": 1526432451,
                                            "text": "good beer selection and the empanadas are really good. it’s a very nice bar to spend some time...",
                                            "type": "user",
                                            "canonicalUrl": "https://foursquare.com/item/5afb82c3f62f2b0ab7beb627",
                                            "lang": "en",
                                            "likes": {
                                                "count": 0,
                                                "groups": []
                                            },
                                            "logView": true,
                                            "agreeCount": 0,
                                            "disagreeCount": 0,
                                            "todo": {
                                                "count": 0
                                            },
                                            "user": {
                                                "id": "14263536",
                                                "firstName": "Jose Antonio",
                                                "lastName": "Espinal",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/14263536_q217-ZOc_pCBUdIkwZkkV8b7aqscaUNTWmMINrF63tGhDOVo_MRgtTSfOJNHE0rxc9EY_Bd0H.jpg"
                                                }
                                            },
                                            "authorInteractionType": "liked"
                                        }
                                    ]
                                }
                            ]
                        },
                        "shortUrl": "http://4sq.com/1shDgqZ",
                        "timeZone": "America/Puerto_Rico",
                        "listed": {
                            "count": 5,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Lists from other people",
                                    "count": 5,
                                    "items": [
                                        {
                                            "id": "5b4fdce735811b002bbe2a4e",
                                            "name": "PR",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "45667799",
                                                "firstName": "Marvin",
                                                "lastName": "Yves",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/XPPTQGYXT3ARQZVK.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/marvinyves/list/pr",
                                            "canonicalUrl": "https://foursquare.com/marvinyves/list/pr",
                                            "createdAt": 1531960551,
                                            "updatedAt": 1532197019,
                                            "photo": {
                                                "id": "4f8d8d5ae4b0b2abb44f9333",
                                                "createdAt": 1334676826,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/fY5n4hij-FlN3a68pG11aTJdThyWQBKJblm0-gn3FHE.jpg",
                                                "width": 537,
                                                "height": 720,
                                                "user": {
                                                    "id": "476027",
                                                    "firstName": "Michael",
                                                    "lastName": "Anderson",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/YB2RDXZV0KKO4OEM.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 0
                                            },
                                            "listItems": {
                                                "count": 7,
                                                "items": [
                                                    {
                                                        "id": "v545aa9bd498e7c33c35be2a0",
                                                        "createdAt": 1532130427
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "56d47480498e0ac38b1baa6f",
                                            "name": "Pa' Ir",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "43520878",
                                                "firstName": "Michel",
                                                "lastName": "Alejandro",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/43520878-LFF4ABDZRBE3BEFZ.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/43520878/list/pa-ir",
                                            "canonicalUrl": "https://foursquare.com/user/43520878/list/pa-ir",
                                            "createdAt": 1456764032,
                                            "updatedAt": 1532187119,
                                            "photo": {
                                                "id": "51182ef5e4b0f0412a9e5ebd",
                                                "createdAt": 1360539381,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/18788855_TPExq-6DPBaVdvzn0F5mqBdPQXDRFrJYQgFmWFP23CM.jpg",
                                                "width": 960,
                                                "height": 720,
                                                "user": {
                                                    "id": "18788855",
                                                    "firstName": "Noel",
                                                    "lastName": "Dávila",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/18788855-0VGYL424UHCFEVY4.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 0
                                            },
                                            "listItems": {
                                                "count": 18,
                                                "items": [
                                                    {
                                                        "id": "v545aa9bd498e7c33c35be2a0",
                                                        "createdAt": 1516835167
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "pageUpdates": {
                            "count": 0,
                            "items": []
                        },
                        "inbox": {
                            "count": 0,
                            "items": []
                        },
                        "attributes": {
                            "groups": [
                                {
                                    "type": "price",
                                    "name": "Price",
                                    "summary": "$$",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Price",
                                            "displayValue": "$$",
                                            "priceTier": 2
                                        }
                                    ]
                                },
                                {
                                    "type": "drinks",
                                    "name": "Drinks",
                                    "summary": "Beer",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Beer",
                                            "displayValue": "Beer"
                                        }
                                    ]
                                }
                            ]
                        },
                        "bestPhoto": {
                            "id": "5851a774e309e14065c37252",
                            "createdAt": 1481746292,
                            "source": {
                                "name": "Swarm for iOS",
                                "url": "https://www.swarmapp.com"
                            },
                            "prefix": "https://fastly.4sqi.net/img/general/",
                            "suffix": "/450301_fIma7lHmr56UrLprB7ZuNOz2GUza15BL6udl7oRUVlM.jpg",
                            "width": 1920,
                            "height": 1440,
                            "visibility": "public"
                        },
                        "colors": {
                            "highlightColor": {
                                "photoId": "5851a774e309e14065c37252",
                                "value": -14673896
                            },
                            "highlightTextColor": {
                                "photoId": "5851a774e309e14065c37252",
                                "value": -1
                            },
                            "algoVersion": 3
                        }
                    }

                    ,
                    {
                        "id": "4b5e3522f964a520c38329e3",
                        "name": "El Patio De Sam",
                        "contact": {
                            "phone": "7877231149",
                            "formattedPhone": "(787) 723-1149"
                        },
                        "location": {
                            "address": "Calle San Sebastian 102",
                            "lat": 18.466971206102386,
                            "lng": -66.11817404403087,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.466971206102386,
                                    "lng": -66.11817404403087
                                }
                            ],
                            "postalCode": "00901",
                            "cc": "PR",
                            "city": "San Juan",
                            "state": "San Juan",
                            "country": "Puerto Rico",
                            "formattedAddress": [
                                "Calle San Sebastian 102",
                                "San Juan 00901",
                                "Puerto Rico"
                            ]
                        },
                        "canonicalUrl": "https://foursquare.com/v/el-patio-de-sam/4b5e3522f964a520c38329e3",
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            },
                            {
                                "id": "4bf58dd8d48988d118941735",
                                "name": "Dive Bar",
                                "pluralName": "Dive Bars",
                                "shortName": "Dive Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/divebar_",
                                    "suffix": ".png"
                                }
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 30
                        },
                        "price": {
                            "tier": 2,
                            "message": "Moderate",
                            "currency": "$"
                        },
                        "likes": {
                            "count": 51,
                            "groups": [
                                {
                                    "type": "others",
                                    "count": 51,
                                    "items": []
                                }
                            ],
                            "summary": "51 Likes"
                        },
                        "dislike": false,
                        "ok": false,
                        "rating": 7.9,
                        "ratingColor": "C5DE35",
                        "ratingSignals": 84,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "count": 0,
                            "unconfirmedCount": 0,
                            "marked": false,
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "photos": {
                            "count": 113,
                            "groups": [
                                {
                                    "type": "checkin",
                                    "name": "Friends' check-in photos",
                                    "count": 0,
                                    "items": []
                                },
                                {
                                    "type": "venue",
                                    "name": "Venue photos",
                                    "count": 113,
                                    "items": [
                                        {
                                            "id": "50a68292e4b0050ef52ddb17",
                                            "createdAt": 1353089682,
                                            "source": {
                                                "name": "Foursquare for iOS",
                                                "url": "https://foursquare.com/download/#/iphone"
                                            },
                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                            "suffix": "/38983150_8TQSuEn7x-5PhJMlw4jMIQ9gnpPP3Civ8lRiWr7effw.jpg",
                                            "width": 720,
                                            "height": 540,
                                            "user": {
                                                "id": "38983150",
                                                "firstName": "Marc",
                                                "lastName": "Kassouf",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/5BE44BONJNHADZU4.jpg"
                                                }
                                            },
                                            "visibility": "public"
                                        }
                                    ]
                                }
                            ],
                            "summary": "0 photos"
                        },
                        "reasons": {
                            "count": 1,
                            "items": [
                                {
                                    "summary": "Lots of people like this place",
                                    "type": "general",
                                    "reasonName": "rawLikesReason"
                                }
                            ]
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "createdAt": 1264465186,
                        "tips": {
                            "count": 30,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "All tips",
                                    "count": 30,
                                    "items": [
                                        {
                                            "id": "543a08d5498e67ba718504c3",
                                            "createdAt": 1413089493,
                                            "text": "Riquísimo frape de Coco",
                                            "type": "user",
                                            "canonicalUrl": "https://foursquare.com/item/543a08d5498e67ba718504c3",
                                            "photo": {
                                                "id": "543a08d7498e97a79b94f4ac",
                                                "createdAt": 1413089495,
                                                "source": {
                                                    "name": "Foursquare for iOS",
                                                    "url": "https://foursquare.com/download/#/iphone"
                                                },
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/42848571_OemtbqCVjWgS342ZB61L3ZMhQxRfhusGq1t3FUSTJMk.jpg",
                                                "width": 960,
                                                "height": 720,
                                                "visibility": "public"
                                            },
                                            "photourl": "https://fastly.4sqi.net/img/general/original/42848571_OemtbqCVjWgS342ZB61L3ZMhQxRfhusGq1t3FUSTJMk.jpg",
                                            "lang": "es",
                                            "likes": {
                                                "count": 6,
                                                "groups": [
                                                    {
                                                        "type": "others",
                                                        "count": 6,
                                                        "items": [
                                                            {
                                                                "id": "94949563",
                                                                "firstName": "José",
                                                                "lastName": "Ruiz",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/94949563-LZ1WQ3PYCF5CXAV0.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "104714822",
                                                                "firstName": "Tahira",
                                                                "lastName": "Morillo",
                                                                "gender": "female",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/104714822-EJUH3CDUFXTDREJO.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "78021882",
                                                                "firstName": "idrissakici",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/78021882_lYBwZwzK_InHVp0ICG4OP3R9B5uGXed3h3PXnt7IdzWkfywVPNhY80HbBHTjO_NYvBUL94P4g.jpg"
                                                                }
                                                            },
                                                            {
                                                                "id": "59201188",
                                                                "firstName": "Osman",
                                                                "lastName": "Osman",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/59201188-4GPAP0GRMDS4J2PU.jpg"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "summary": "6 likes"
                                            },
                                            "logView": true,
                                            "agreeCount": 6,
                                            "disagreeCount": 0,
                                            "todo": {
                                                "count": 0
                                            },
                                            "user": {
                                                "id": "42848571",
                                                "firstName": "Angelina",
                                                "lastName": "Pizarro",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/42848571-YWHD2KO5ONLNFAAX.jpg"
                                                }
                                            },
                                            "authorInteractionType": "liked"
                                        }
                                    ]
                                }
                            ]
                        },
                        "shortUrl": "http://4sq.com/aymnTG",
                        "timeZone": "America/Puerto_Rico",
                        "listed": {
                            "count": 17,
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Lists from other people",
                                    "count": 17,
                                    "items": [
                                        {
                                            "id": "510ac139e4b07b50da06d973",
                                            "name": "Sitios que me gustan",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "39861156",
                                                "firstName": "Darmarys",
                                                "lastName": "Velázquez",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/GAMCULEH50OW5LM0.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/39861156/list/sitios-que-me-gustan",
                                            "canonicalUrl": "https://foursquare.com/user/39861156/list/sitios-que-me-gustan",
                                            "createdAt": 1359659321,
                                            "updatedAt": 1389659330,
                                            "photo": {
                                                "id": "4f85ad2fe4b0e90cd4ae2bfe",
                                                "createdAt": 1334160687,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/om58m2bOCEURncHt-NUUQkhZZXZgk5GU_Lyh14fdbdQ.jpg",
                                                "width": 720,
                                                "height": 540,
                                                "user": {
                                                    "id": "12558563",
                                                    "firstName": "Alberto",
                                                    "lastName": "Regis Blay",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/12558563-Z12BINKKMZ24K32T.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 1
                                            },
                                            "listItems": {
                                                "count": 72,
                                                "items": [
                                                    {
                                                        "id": "t4ec48cc402d54e7046ea7833",
                                                        "createdAt": 1359660563,
                                                        "photo": {
                                                            "id": "50a68292e4b0050ef52ddb17",
                                                            "createdAt": 1353089682,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/38983150_8TQSuEn7x-5PhJMlw4jMIQ9gnpPP3Civ8lRiWr7effw.jpg",
                                                            "width": 720,
                                                            "height": 540,
                                                            "user": {
                                                                "id": "38983150",
                                                                "firstName": "Marc",
                                                                "lastName": "Kassouf",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/5BE44BONJNHADZU4.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "5197ed08498edb9fb493820a",
                                            "name": "T + L's America's Best Burger Cities 2012",
                                            "description": "Travel + Leisure's America's Best Burger Cities 2012\n\nhttp://www.travelandleisure.com/articles/americas-best-burger-cities",
                                            "entities": [
                                                {
                                                    "indices": [
                                                        54,
                                                        122
                                                    ],
                                                    "type": "url",
                                                    "object": {
                                                        "url": "http://www.travelandleisure.com/articles/americas-best-burger-cities"
                                                    }
                                                }
                                            ],
                                            "type": "others",
                                            "user": {
                                                "id": "56330852",
                                                "firstName": "BillysBurgerBlog.com",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/56330852-ZXWSVPWEAOEWAKP4.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": false,
                                            "url": "/user/56330852/list/t--ls-americas-best-burger-cities-2012",
                                            "canonicalUrl": "https://foursquare.com/user/56330852/list/t--ls-americas-best-burger-cities-2012",
                                            "createdAt": 1368911112,
                                            "updatedAt": 1368912842,
                                            "followers": {
                                                "count": 1
                                            },
                                            "listItems": {
                                                "count": 36,
                                                "items": [
                                                    {
                                                        "id": "v4b5e3522f964a520c38329e3",
                                                        "createdAt": 1368911779
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "55526b4f498e5d3067cef180",
                                            "name": "Puerto Rico Adventure",
                                            "description": "",
                                            "type": "others",
                                            "user": {
                                                "id": "47321",
                                                "firstName": "Nate",
                                                "lastName": "Folkert",
                                                "gender": "male",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/47321_7-SPk1Ml_yiKec52usgfszPx8O30OFhIe9epxw83ZYW8qbNkwYSlM0EHJnyMqZRWE1ejuhsXj"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": true,
                                            "url": "/nfolkert/list/puerto-rico-adventure",
                                            "canonicalUrl": "https://foursquare.com/nfolkert/list/puerto-rico-adventure",
                                            "createdAt": 1431464783,
                                            "updatedAt": 1431976792,
                                            "photo": {
                                                "id": "5207fc5f11d271443cfd23af",
                                                "createdAt": 1376255071,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/19574743_2-Z3jz1FL7a7rARNbPZmLZVYIZoDVjPQrS6trir7iyk.jpg",
                                                "width": 720,
                                                "height": 960,
                                                "user": {
                                                    "id": "19574743",
                                                    "firstName": "Jamila",
                                                    "lastName": "Rowser",
                                                    "gender": "female",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/FXPQL3HSXW3EFVJC.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 3
                                            },
                                            "listItems": {
                                                "count": 198,
                                                "items": [
                                                    {
                                                        "id": "v4b5e3522f964a520c38329e3",
                                                        "createdAt": 1431572804,
                                                        "photo": {
                                                            "id": "4f651282e4b08383b23bc448",
                                                            "createdAt": 1332023938,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/T01m8EmnHHg3IsOdetAvi7s4_RFs65hU1lRHRrPB_8w.jpg",
                                                            "width": 720,
                                                            "height": 432,
                                                            "user": {
                                                                "id": "23456587",
                                                                "firstName": "Juan",
                                                                "lastName": "Travieso",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/0ZK20JGYPDOMPCLH.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "50df6207e4b09f5e873a8868",
                                            "name": "San Juan To Dos",
                                            "description": "Our favorites from our trip, and some to do next time",
                                            "type": "others",
                                            "user": {
                                                "id": "144122",
                                                "firstName": "Joanna",
                                                "lastName": "Flamm",
                                                "gender": "female",
                                                "photo": {
                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                    "suffix": "/144122-T3TSOB5U5KDCFVBF.jpg"
                                                }
                                            },
                                            "editable": false,
                                            "public": true,
                                            "collaborative": true,
                                            "url": "/cozyjosie/list/san-juan-to-dos",
                                            "canonicalUrl": "https://foursquare.com/cozyjosie/list/san-juan-to-dos",
                                            "createdAt": 1356816903,
                                            "updatedAt": 1498923002,
                                            "photo": {
                                                "id": "50df4b96e4b053b5eed0d5b0",
                                                "createdAt": 1356811158,
                                                "prefix": "https://fastly.4sqi.net/img/general/",
                                                "suffix": "/29153313_-J7-hs4J-nB7fItSDGQgtPjmHOIWk1OSr2UuwjYiuhQ.jpg",
                                                "width": 612,
                                                "height": 612,
                                                "user": {
                                                    "id": "29153313",
                                                    "firstName": "Impulse",
                                                    "lastName": "El Intelectual",
                                                    "gender": "male",
                                                    "photo": {
                                                        "prefix": "https://fastly.4sqi.net/img/user/",
                                                        "suffix": "/DFGOZ2GGQRPZTZRC.jpg"
                                                    }
                                                },
                                                "visibility": "public"
                                            },
                                            "followers": {
                                                "count": 13
                                            },
                                            "listItems": {
                                                "count": 45,
                                                "items": [
                                                    {
                                                        "id": "t4ec48cc402d54e7046ea7833",
                                                        "createdAt": 1356908614,
                                                        "photo": {
                                                            "id": "50a68292e4b0050ef52ddb17",
                                                            "createdAt": 1353089682,
                                                            "prefix": "https://fastly.4sqi.net/img/general/",
                                                            "suffix": "/38983150_8TQSuEn7x-5PhJMlw4jMIQ9gnpPP3Civ8lRiWr7effw.jpg",
                                                            "width": 720,
                                                            "height": 540,
                                                            "user": {
                                                                "id": "38983150",
                                                                "firstName": "Marc",
                                                                "lastName": "Kassouf",
                                                                "gender": "male",
                                                                "photo": {
                                                                    "prefix": "https://fastly.4sqi.net/img/user/",
                                                                    "suffix": "/5BE44BONJNHADZU4.jpg"
                                                                }
                                                            },
                                                            "visibility": "public"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "popular": {
                            "status": "Likely open",
                            "richStatus": {
                                "entities": [],
                                "text": "Likely open"
                            },
                            "isOpen": true,
                            "isLocalHoliday": false,
                            "timeframes": [
                                {
                                    "days": "Today",
                                    "includesToday": true,
                                    "open": [
                                        {
                                            "renderedTime": "Noon–Midnight"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Sun",
                                    "open": [
                                        {
                                            "renderedTime": "Noon–10:00 PM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Mon–Tue",
                                    "open": [
                                        {
                                            "renderedTime": "Noon–10:00 PM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Wed",
                                    "open": [
                                        {
                                            "renderedTime": "Noon–2:00 PM"
                                        },
                                        {
                                            "renderedTime": "4:00 PM–9:00 PM"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Thu",
                                    "open": [
                                        {
                                            "renderedTime": "1:00 PM–Midnight"
                                        }
                                    ],
                                    "segments": []
                                },
                                {
                                    "days": "Fri",
                                    "open": [
                                        {
                                            "renderedTime": "Noon–11:00 PM"
                                        }
                                    ],
                                    "segments": []
                                }
                            ]
                        },
                        "pageUpdates": {
                            "count": 0,
                            "items": []
                        },
                        "inbox": {
                            "count": 0,
                            "items": []
                        },
                        "attributes": {
                            "groups": [
                                {
                                    "type": "price",
                                    "name": "Price",
                                    "summary": "$$",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Price",
                                            "displayValue": "$$",
                                            "priceTier": 2
                                        }
                                    ]
                                },
                                {
                                    "type": "payments",
                                    "name": "Credit Cards",
                                    "summary": "Credit Cards",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Credit Cards",
                                            "displayValue": "Yes"
                                        }
                                    ]
                                },
                                {
                                    "type": "outdoorSeating",
                                    "name": "Outdoor Seating",
                                    "count": 1,
                                    "items": [
                                        {
                                            "displayName": "Outdoor Seating",
                                            "displayValue": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "serves",
                                    "name": "Menus",
                                    "summary": "Brunch & Happy Hour",
                                    "count": 8,
                                    "items": [
                                        {
                                            "displayName": "Brunch",
                                            "displayValue": "Brunch"
                                        },
                                        {
                                            "displayName": "Happy Hour",
                                            "displayValue": "Happy Hour"
                                        }
                                    ]
                                },
                                {
                                    "type": "drinks",
                                    "name": "Drinks",
                                    "summary": "Beer, Full Bar & Cocktails",
                                    "count": 5,
                                    "items": [
                                        {
                                            "displayName": "Beer",
                                            "displayValue": "Beer"
                                        },
                                        {
                                            "displayName": "Full Bar",
                                            "displayValue": "Full Bar"
                                        },
                                        {
                                            "displayName": "Cocktails",
                                            "displayValue": "Cocktails"
                                        }
                                    ]
                                }
                            ]
                        },
                        "bestPhoto": {
                            "id": "50a68292e4b0050ef52ddb17",
                            "createdAt": 1353089682,
                            "source": {
                                "name": "Foursquare for iOS",
                                "url": "https://foursquare.com/download/#/iphone"
                            },
                            "prefix": "https://fastly.4sqi.net/img/general/",
                            "suffix": "/38983150_8TQSuEn7x-5PhJMlw4jMIQ9gnpPP3Civ8lRiWr7effw.jpg",
                            "width": 720,
                            "height": 540,
                            "visibility": "public"
                        },
                        "colors": {
                            "highlightColor": {
                                "photoId": "50a68292e4b0050ef52ddb17",
                                "value": -8357832
                            },
                            "highlightTextColor": {
                                "photoId": "50a68292e4b0050ef52ddb17",
                                "value": -1
                            },
                            "algoVersion": 3
                        }
                    }


                ];
                console.log(debug);

                this.setState({
                        venues: debug
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
                console.log(item);
                item = item.venue;
                return await axios.get(/*endPoints + item.id + "?" + new URLSearchParams(parameters)*/"https://api.myjson.com/bins/d0rvq").then((
                    (item) => {
                        return item.data.response.venue;
                    }
                ))
            });
            return await Promise.all(promises);

        }

    };
    /**
     *  Gets the info from Foursquare
     * @param query : What's gonna be searched on the server
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
                        venues: response.data.response.groups[0].items
                    }
                );
                console.log(response)
            }).then(this.getDetailedInfo)
            .catch(error => {
                    console.log('Error!!' + error);
                }
            )
    };
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
        if (marker.getAnimation() !== null) {//If animation isn't equal to null
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
        console.log(venueSelected);

        let content = `<div class="infoWindow">
<h1 class="venueName">${venueSelected.name}</h1>`;
        if (venueSelected) {
            if (venueSelected.bestPhoto.prefix !== undefined && venueSelected.bestPhoto.suffix) {
                content += `<img src="${venueSelected.bestPhoto.prefix}original${venueSelected.bestPhoto.suffix}" class='iwImage'>`
            }
            if (venueSelected.hours !== undefined) {
                if (venueSelected.hours.timeframes[0].open[0].renderedTime) {
                    content += `<p class="venueTime">${venueSelected.hours.timeframes[0].open[0].renderedTime}</p>`;
                }
            }
            if (venueSelected.likes) {
                content += `<p class="venueLikes">${venueSelected.likes.summary}</p>`
            }
            if (venueSelected.rating) {
                content += `<p class="venueRating">Rating: ${venueSelected.rating}`
            }
        }
        this.state.infoWindow.setContent(content);//Set the Content for the infoWindow to be the name of the venue
        this.state.infoWindow.open(this.state.map,
            mapMarker[0])
    };
    render() {
        return (
            <div className={'Main-Container'}>
                <Menu markers={this.state.markers} venues={this.state.venues} infoWindow={this.state.infoWindow}
                      map={this.state.map} setInfoWindow={this.setInfoWindow} animationControl={this.animationControl}
                      updateQuery={this.updateQuery}
                />
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
