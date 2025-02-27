import logo from "@images/logo-devlinks-large.svg"
import smallLogo from "@images/logo-devlinks-small.svg"
import eyeIcon from "@images/eye-icon.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
function Header() {
    const [activeContent, setActiveContent] = useState("Links")
    return (
        <header>
            <nav>
                <ul className="flex justify-between items-center">
                    <img className="hidden md:block" src={logo} alt="img0" />
                    <img className="md:hidden" src={smallLogo} alt="" />

                    <div className="flex items-center gap-[10px]">
                        <li onClick={() => setActiveContent('Links')} className={`cursor-pointer flex gap-[6px] rounded-[6px] hover:bg-[#efebff] items-center px-[10px] py-[7px] ${activeContent === 'Links' && 'bg-[#efebff]  text-[#633cff]'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill={activeContent == "Links" ? '#633cff' : '#737373'} d="M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z" /></svg>
                            <span className="hidden">Links</span> </li>
                        <li onClick={() => setActiveContent('Profile')} className={`cursor-pointer rounded-[6px] flex gap-[6px] hover:bg-[#efebff] items-center px-[10px] py-[7px] ${activeContent === 'Profile' && 'bg-[#efebff]  text-[#633cff]'} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill={activeContent == "Profile" ? '#633cff' : '#737373'} d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" /></svg>
                            <span className="hidden">Profile Details</span>  </li>
                    </div>
                    <div className="p-[8px] md:p-[10px] hover:bg-[#efebff] px-[12px] md:px-[20px] cursor-pointer rounded-[8px] border-solid border-[#633cff] border-[1px]"> <Link to={'/preview'} className="text-[#633cff] font-[500]"><img className="md:hidden" src={eyeIcon} alt="" /><span className="hidden md:block">Preview</span></Link></div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
