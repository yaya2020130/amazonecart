import axios from 'axios';
const instance= axios.create({
  baseURL:'https://us-central1-ecart-90363.cloudfunctions.net/api' //i got this from firebase we get this after i deployed the app to the cloud function
  
  
  
  
  // "http://localhost:5001/ecart-90363/us-central1/api"//the api URL is local i found it in the terminal after i run firebase  emulators:start
});
export default instance;