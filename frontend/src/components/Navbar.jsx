import { Container } from "react-bootstrap"
import { NavLink } from "react-router"
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

export default function Navbar() {
    const ref = useRef()
    const handleBars = () => {
        ref.current.classList.toggle("hidden")        
    }
    return (
        <>
            <Container>
                <div className="flex items-center justify-between py-4">
                    <div>
                        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" />
                    </div>
                    <div className="hidden font-semibold md:flex gap-4 text-lg text-[#0D2D3E]">
                        <NavLink to={"/"}>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to={"/add"}>
                            <span>Add Page</span>
                        </NavLink>
                        <NavLink to={"/favorites"}>
                            <span>Favorites</span>
                        </NavLink>
                        <NavLink to={"/"}>
                            <span>Blog</span>
                        </NavLink>
                        <NavLink to={"/"}>
                            <span>Contact</span>
                        </NavLink>
                    </div>
                    <div className="md:hidden relative" onClick={() => handleBars()}>
                        <span className="text-3xl ">
                            <FaBars />
                        </span>
                        <div ref={ref} 
                        className="font-semibold w-[130px] bg-gray-300 p-2 hidden flex flex-col absolute top-0 right-[30px] gap-4 text-lg opacity-90 text-[#0D2D3E]">
                            <NavLink to={"/"}>
                                <span>Home</span>
                            </NavLink>
                            <NavLink to={"/add"}>
                                <span>Add Page</span>
                            </NavLink>
                            <NavLink to={"/favorites"}>
                                <span>Favorites</span>
                            </NavLink>
                            <NavLink to={"/"}>
                                <span>Blog</span>
                            </NavLink>
                            <NavLink to={"/"}>
                                <span>Contact</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}