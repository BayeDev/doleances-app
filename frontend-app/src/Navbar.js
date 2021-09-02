// Navbar component
import Login from "./Login"
import Logo from "./Logo"
import Search from "./Search"


export default function Navbar(){
    return (
        <div>
            <nav className="bg-primary text-grey-900 flex justify-between">
                <div className="flex justify-between space-x-4 m-2">
                    <div><Logo/></div>
                    <div className=""><Search/></div>
                </div>
                <div className="flex justify-between space-x-4 m-2 mt-2">
                    <Login/>
                </div>
            </nav>
        </div>
    )
}