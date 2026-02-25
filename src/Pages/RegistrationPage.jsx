import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../Components/TextBox"
import Button from "../Components/Button"
import { regisztracio } from "../api";
import { useNavigate } from "react-router-dom";


export default function RegistrationPage(){
    const navigtation = useNavigate();

    const[email,setEmail] = useState(""); 
    const[felhasznalonev,setFelhasznalonev] = useState(""); 
    const[jelszo1,setJelszo1] = useState(""); 
    const[jelszo2,setJelszo2] = useState(""); 


    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div style={{minWidth: 700}}>
                <div className="text-center fs-1 mb-5">Regisztráció</div>
                <TextBox title={"E-mail"} type={"email"} placeholder={"example@gmail.com"} value={email} setValue={setEmail}/>
                <TextBox title={"Felhasználónév"} type={"text"} placeholder={"llama"} value={felhasznalonev} setValue={setFelhasznalonev}/>
                <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={jelszo1} setValue={setJelszo1}/>
                <TextBox title={"Jelszó megerősítés"} type={"password"} placeholder={"******"} value={jelszo2} setValue={setJelszo2}/>
                <div className="text-center mt-2">
                    <Button content={"Regisztráció"} color={"dark"} onClick={async()=>{
                        if (!email || !felhasznalonev || !jelszo1 || !jelszo2) {
                            alert("Hiányos adat(ok)!")
                            return;
                        }
                        if (jelszo1 !== jelszo2) {
                            alert("A jelszavak nem egyeznek!")
                            return;
                        }
                        const res = await regisztracio(email,felhasznalonev,jelszo1);
                        
                        alert(res.message)
                        if (res.result){
                            navigtation('/login')
                        }
                    }}/>
                </div>
            </div>
        </div>
    )
}