import { Route, Routes } from "react-router-dom"
import { QR } from "../components/qrgenerator"
import { ClassList } from "./classlist"
import { Login } from "./login"
import { WorkOption } from "./option"

export const MainPage=()=>{
    return(
        <div style={{'minHeight':'100vh','minWidth':'100vw','background':'linear-gradient(to right top, #65dfc9, #6cdbeb)'}}>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path="/classes" element={<ClassList/>} />
                <Route path="/choice/:class" element={<WorkOption/>} />
                <Route path='/qr' element={<QR/>} />
            </Routes>
        </div>
    )
}