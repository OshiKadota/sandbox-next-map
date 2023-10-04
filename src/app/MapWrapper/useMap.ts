"use client"
import { useEffect, useState } from "react"
import { mapOptions } from "../mapConfig/mapConfig"
import { useLoader } from "./useLoader"

export const useMap = () => {
  const { loader } = useLoader();
  const [map, setMap] = useState<google.maps.Map | null>(null)

  useEffect(()=>{
    if(loader){
      loader
      .importLibrary('maps')
      .then(({Map}) => {
        setMap(new Map(document.getElementById("map") as HTMLElement, mapOptions))
      })
      .catch((e) => {
        console.log('error', e)
      });
    }
  },[loader])
  return {
    map
  }
}
