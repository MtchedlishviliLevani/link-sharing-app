import logo from "@images/logo-devlinks-large.svg"
import headerLinkIcon from "@images/icon-link-header.svg"
import headerProfileIcon from "@images/icon-profile-header.svg"
import { useState } from "react"
function Header() {
    const [activeContent, setActiveContent] = useState("Links")
    return (
        <header>
            <nav>
                <ul className="flex justify-between">
                    <img src={logo} alt="img0" />
                    <div className="flex items-center gap-[10px]">
                        <li onClick={() => setActiveContent('Links')} className={`cursor-pointer flex gap-[6px] items-center px-[10px] py-[5px] ${activeContent === 'Links' && 'bg-[#efebff] rounded-[6px] text-[#633cff]'}`}><img src={headerLinkIcon} alt="img1" /> Links</li>
                        <li onClick={() => setActiveContent('Profile')} className={`cursor-pointer flex gap-[6px] items-center px-[10px] py-[5px] ${activeContent === 'Profile' && 'bg-[#efebff] rounded-[6px] text-[#633cff]'} `}><img src={headerProfileIcon} alt="img2" /> Profile Details</li>
                    </div>
                    <li>Preview</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
