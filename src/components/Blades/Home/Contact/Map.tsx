"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FC } from "react";

interface IMapProps {}
const point = { lat: 21.18324940901656, lng: 79.07033075350813 };
const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map: FC<IMapProps> = () => {
  // const map = useRef<GoogleMap>(null);
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap
        options={{ styles: mapstyle }}
        mapContainerStyle={containerStyle}
        center={point}
        zoom={13}
      >
        <Marker position={point} />
      </GoogleMap>
    </LoadScript>
  );
  // return (
  //   <GoogleMap
  //     defaultZoom={13}
  //     defaultCenter={point}
  //     options={{
  //       gestureHandling: "cooperative",
  //       styles: mapstyle,
  //     }}
  //     ref={map}
  //   >
  //     <Marker position={point} clickable visible />
  //   </GoogleMap>
  // );
};

export default Map;
const mapstyle = [
  // {
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#f5f5f5"
  //         }
  //     ]
  // },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  // {
  //     "featureType": "poi",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#757575"
  //         }
  //     ]
  // },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  // {
  //     "featureType": "poi.park",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#e5e5e5"
  //         }
  //     ]
  // },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  // {
  //     "featureType": "poi.park",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#9e9e9e"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#ffffff"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.arterial",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#757575"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#dadada"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#616161"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.local",
  //     "elementType": "labels",
  //     "stylers": [
  //         {
  //             "visibility": "off"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.local",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#9e9e9e"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "transit.line",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#e5e5e5"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "transit.station",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#eeeeee"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "water",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#c9c9c9"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "water",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#9e9e9e"
  //         }
  //     ]
  // }
];
