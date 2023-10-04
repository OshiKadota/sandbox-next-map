import { useEffect, useState } from "react";
import { facilitiesData } from "../mapConfig/mapConfig";
import { FacilityMarker } from "../type/FacilityType";
import { useLoader } from "./useLoader";
export const useMarker = (map: google.maps.Map | null, infoWindow: google.maps.InfoWindow | undefined) =>{
  const { loader } = useLoader();
  const [facilitiesMarker, setFacilitiesMarker] = useState<any>([])
  const [currentFacility,setcurrentFacility] = useState<any>()

  const handleMarkers = (facilitiesMarker: FacilityMarker[], activeFacility: FacilityMarker) => {
    const newFacilities = facilitiesMarker.map((facility)=>{
      if(activeFacility.name === facility.name){
        facility.marker.setAnimation(1)
        infoWindow?.open({
          anchor: facility.marker
        })
        return facility
      }
      facility.marker.setAnimation(null)
      return facility
    })
    setFacilitiesMarker(newFacilities);
  }

  useEffect(()=>{
    if(map && loader){
      loader
      .importLibrary('marker')
      .then(({Marker}) => {
        const newFacilities = facilitiesData.map((facility)=>{
          const newMarker = {
            name: facility.name, 
            marker: new Marker({position: facility.positon, map, title: facility.name }),
          }
          return newMarker
        })
        setFacilitiesMarker(newFacilities)
      })
      .catch((e) => {
        console.log('error', e)
      });
    }
  },[map])

    useEffect(()=>{
      if(facilitiesMarker){
        facilitiesMarker.map((facility: FacilityMarker)=>{
          facility.marker.addListener("mouseover", () => {
            setcurrentFacility(facility)
            handleMarkers(facilitiesMarker, facility)
        })
      })
      }
    },[facilitiesMarker])


    return {facilitiesMarker,currentFacility};
}