import { useContext } from "react";
import {LocationsContext} from "../contexts/LocationsContext";

export function Test() {
  const {title}=useContext(LocationsContext)
  return(
    <div>
      {
title
      }
    </div>
  )
}