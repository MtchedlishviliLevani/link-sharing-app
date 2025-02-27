import type { LinkInputProps } from "@/types"
import linkIcon from "../../assets/images/icon-link-header.svg"
function LinkInput({ updateLink, address, id }: LinkInputProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        updateLink(id, e.target.value)
    }
    return (
        <div>
            <h3>Link</h3>
            <div className="relative bg-white cursor-pointer px-[12px] p-[8px] rounded-[8px] pl-[45px] hover:border-solid transition-all duration-300 hover:border-[1px] hover:border-[#633cff] ">
                <input onChange={handleChange} value={address} type="text" className="outline-none border-none w-[100%]" />
                <img src={linkIcon} className="absolute top-[50%] left-[15px] translate-y-[-50%]" alt="" />
            </div>


        </div>
    )
}

export default LinkInput
