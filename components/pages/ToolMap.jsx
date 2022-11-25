import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  IonRow,
  IonCol,
  useIonViewWillEnter,
  useIonModal
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';
import { MarkerInfoWindow } from '../MarkerInfoWindow';

import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap } from '@capacitor/google-maps';

import { homeItems } from '../../mock';

const ToolMap = () => {
  const settings = Store.useState(selectors.getSettings);
  // TODO: auslagern in environment Datei
  const GoogleApiKey = 'AIzaSyDJTZFMp_OpHlMhZbhlnXtCXQw-8Uuguqs'

  const markers = homeItems;

  let newMap;
  const mapRef = useRef(null);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker
  });

  const modalOptions = {
    initialBreakpoint: 0.4,
    breakpoints: [0, 0.4],
    backdropBreakpoint: 0,
    onDidDismiss: () => dismiss()
  };

  const [mapConfig, setMapConfig] = React.useState({
    center: { lat: 47.99, lng: 7.8 },
    zoom: 12,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
  });

  const createMap = async () => {

    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "google-map",
      element: mapRef.current,
      apiKey: GoogleApiKey,
      config: mapConfig
    });

    newMap.setOnMarkerClickListener((marker) => markerClick(marker));
    addMapMarkers();
  }

  const markerClick = marker => {

    setSelectedMarker(markers.filter(m => (m.lat === marker.latitude && m.lng === marker.longitude))[0]);
    present(modalOptions);
  }

  const addMapMarker = async marker => {

    await newMap.addMarker({

      coordinate: {
        lat: marker.lat,
        lng: marker.lng
      },
      tool: marker.tool
    });
  }

  const addMapMarkers = () => markers.forEach(marker => addMapMarker(marker));


  useIonViewWillEnter(() => createMap());

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Karte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>


        <IonLabel>Werkzeuge in der Nähe</IonLabel>
        <IonRow>
          <IonCol size="12">
            <capacitor-google-map style={{
              display: 'inline-block',
              width: '100%',
              height: 800
            }}
              ref={mapRef} id="map"></capacitor-google-map>
          </IonCol>
        </IonRow>


      </IonContent>
    </IonPage>
  );
};

export default ToolMap;
