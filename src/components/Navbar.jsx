import {useState} from "react";
import logo from '../assets/logo.png'
import {LINKS} from '../constants'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar =()=>{
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    //this will toggle the state
    const toggleMobileMenu =()=>{
        setIsMobileOpen(!isMobileOpen)
    }

    //smooth scrolling
    const handleScroll = (e, targetID)=>{
        e.preventDefault();
        const targetElement = document.getElementById(targetID);
        if (targetElement){
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top:offsetTop,
                behavior: "smooth"
            })
        }

        setIsMobileOpen(false)
    }

    return(
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-6  lg:m-2 lg:w=[50rem]">
                <img src={logo} alt="Logo" width={95} height={22} className="pr-4 cursor-pointer"/>
                <div className="flex w-6xl">
                    <div className="hidden uppercase space-x-6 lg:flex lg:rounded-full backdrop-blur-3xl p-3 ">
                        {LINKS.map((link,idx)=>(
                            <a key={idx} href={`#${link.targetId}`} className={`text-sm ${idx !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} onClick={(e)=>handleScroll(e, link.targetId)}>
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden  rounded-full bg-black p-1">
                    <button onClick={toggleMobileMenu} className="cursor-pointer">
                        {isMobileOpen ? <IoClose /> : <IoIosMenu />}
                    </button>
                </div>
            </div>
            {
                isMobileOpen && (
                    <div className="w-full lg:hidden  backdrop-blur-3xl">
                        {
                            LINKS.map((link, idx)=>(
                                <a key={idx} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter"  onClick={(e)=>handleScroll(e, link.targetId)}>
                                    {link.text}
                                </a>
                            ))
                        }
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;
