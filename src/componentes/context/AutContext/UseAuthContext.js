import { useContext } from "react"
import { AuthContext } from "./AutContext"

export const UseAuthContext=()=>{
    return useContext(AuthContext);
}