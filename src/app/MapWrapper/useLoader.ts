import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader"
import { API_KEY } from "../mapConfig/mapConfig"

export const useLoader = () => {
    const [loader, setLoader] = useState<Loader | null>(null)
    useEffect(() => {
      setLoader(
        new Loader({
          apiKey: API_KEY,
          version: "weekly",
          libraries: ["places"]
        })
      )
    }, []) 
    return {
      loader
    }
  }