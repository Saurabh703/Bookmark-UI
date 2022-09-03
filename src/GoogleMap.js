import {Map, GoogleApiWrapper} from 'google-maps-react'
import { useState } from 'react'
//import {latitude, longititude} from './Form'

const MapContainer = (props) => {
    const {
        latitude,
        longititude
    } = props

    // const [latit, setLatit] = useState();
    // const [longit, setLongit] = useState();

    // latit = latitude;
    // longit = longititude;

    return (
        <>
        <Map google={props.google}
            style={{width: "50%", height: "50%"}}
            zoom={10}
            initialCenter={{
                lat: -71.4197,
                lon: 71.7478
            }}
            />
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBMnQUIsXckejj_YaldoADNwsS42gIeryM"
})(MapContainer)