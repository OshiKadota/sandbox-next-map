"use client"
import { FacilityInfoWindow } from "./MapWrapper/FacilityInfoWindow/FacilityInfoWindow";
import { MapWrapper } from "./MapWrapper/MapWrapper";


export default function Home() {
  return (
    <>
    <div>
      <div>
        介護事業所検索
      </div>
      <MapWrapper/>
    </div>
    </>
  )
}
