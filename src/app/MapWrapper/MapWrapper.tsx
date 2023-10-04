import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { FacilityInfoWindow } from './FacilityInfoWindow/FacilityInfoWindow';
import { useInfowindow } from "./useInfowindow";
import { useMap } from "./useMap";
import {useMarker} from "./useMarker"
export const MapWrapper = () => {
  const { map } = useMap();
  const {infoWindow} = useInfowindow()
  const { currentFacility } = useMarker(map, infoWindow);
  useEffect(()=>{
    if(infoWindow && currentFacility){
      infoWindow.addListener('domready', () => {
        const container = document.getElementById('infoWindow');
        const root = createRoot(container as Element | DocumentFragment);
        root.render(<FacilityInfoWindow name={ currentFacility.name } />);
      })
    }
  },[infoWindow, currentFacility])


  return(
      <>
      <div className="h-screen" id="map"></div>
      </>
  )
}