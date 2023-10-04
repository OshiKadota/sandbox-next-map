import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useLoader } from "./useLoader";

export const useInfowindow = () => {
  const [infoWindow, setinfoWindow] = useState<google.maps.InfoWindow>()
  const { loader } = useLoader();
  const contentString = '<div id="infoWindow"></div>';
  useEffect(()=>{
    if(loader){
      loader
      .importLibrary('maps')
      .then(({InfoWindow}) => {
        setinfoWindow( new InfoWindow({content: contentString}))
      })
      .catch((e) => {
        console.log('error', e)
      });
    }
  },[loader])

  return {infoWindow}
}