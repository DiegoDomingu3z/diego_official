import { useEffect } from "react"
import Navbar from "./Navbar"


const Layout = ({children, title}) => {

    return (
        <div className="w-full noise">
            <div>
                <header className="w-full">
                <Navbar/>
                </header>
                <main className="w-screen h-screen overflow-auto">
                
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout