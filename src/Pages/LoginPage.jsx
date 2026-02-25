import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../Components/TextBox"
import Button from "../Components/Button"
import { regisztracio } from "../api";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){
    const navigtation = useNavigate();

    const[email,setEmail] = useState(""); 
    const[felhasznalonev,setFelhasznalonev] = useState(""); 
    const[jelszo1,setJelszo1] = useState(""); 
    const[jelszo2,setJelszo2] = useState(""); 

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
        <div style={{minWidth: 700}}>
            <div className="text-center fs-1 mb-5">Belépés</div>
            <TextBox title={"Felhasználónév"} type={"text"} placeholder={"llama"} value={felhasznalonev} setValue={setFelhasznalonev}/>
            <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={jelszo1} setValue={setJelszo1}/>
            <div className="text-center mt-2">
                <Button content={"Belépés"} color={"dark"} onClick={async()=>{
                    if (!email || !felhasznalonev) {
                        alert("Hiányos adat(ok)!")
                        return;
                    }
                    if (res.result){
                        navigtation('/')
                    }
                }}/>
            </div>
        </div>
    </div>
    )
}