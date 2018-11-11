#Introduction
Welcome to **react-gmap** the last project for de Udacity Front-End Nanodegree.
 The concept behind this project was to build a page that would use the 
 google map API and integrate it with a third party (In this case Foursquare)
 #Before Starting
 There's a few things we should do before actually beginning
 
* To start off you need to create a config.js inside the src folder using the
the configuration:
```javascript
class Config {

    static client_id="YOUR_API_HERE";
   static  client_secret = "YOUR_API_HERE"";
    static gmapAPI="YOUR_API_HERE"";
    }
    export default Config;
```
* ####npm install: Get's the dependecies
* ####npm start: To connect into the server
#Things to consider
* For the serviceworker to work please build the app with **npm build**
* Foursquare free API only give access to 50 premium calls, premium calls 
are needed to render most of this app so without it most of the things won't work.
If you have used all your premium calls then please get another API KEY and switch it on the config file.

