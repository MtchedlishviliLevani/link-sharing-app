import { ReactSVG } from "react-svg";
import chevronDown from "@images/icon-chevron-down.svg";
import chevronUp from "@images/down.svg";
import { useState } from "react";
import type { ArrayProps, LinksDropDownProps } from "@/types";

function LinksDropDown({ array, updateDrop, id, active }: LinksDropDownProps) {
    const [isInputClicked, setIsInputClicked] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    function dropDownAppear() {
        setIsDropDownOpen((prev) => !prev);
        setIsInputClicked((prev) => !prev);
    }

    function handleSelect(arr: ArrayProps) {
        updateDrop(id, arr);
        setIsDropDownOpen(false);
        setIsInputClicked(false);
    }

    return (
        <>
            <div
                data-link-id={id}
                onClick={dropDownAppear}
                className="cursor-pointer px-[12px] p-[8px] rounded-[8px] hover:border-solid transition-all duration-300 hover:border-[1px] hover:border-[#633cff] hover:shadow-input bg-white"
            >
                <div className="flex items-center justify-between gap-[10px] py-[5px]">
                    <div className="flex gap-[10px] items-center">
                        <ReactSVG src={active.icon} className="" />
                        <h3 className="text-[#333] text-[12px] font-instrument platform-name">
                            {active.name}
                        </h3>
                    </div>
                    <div className="relative w-[16px] h-[16px]">
                        <img
                            src={chevronUp}
                            alt=""
                            className={`absolute top-0 left-0 transition-opacity transform scale-95 duration-200 ${isInputClicked ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                        />
                        <img
                            src={chevronDown}
                            alt=""
                            className={`absolute top-[50%] translate-y-[-50%] left-0 transition-opacity transform scale-95 duration-200 ${isInputClicked ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                        />
                    </div>
                </div>
            </div>
            {isDropDownOpen && (
                <div className="bg-white p-[8px] rounded-[8px] shadow-dropdown mt-[10px]">
                    {array.map((value) => (
                        <div
                            onClick={() => handleSelect(value)}
                            key={value?.id}
                            className="cursor-pointer flex svg-icon items-center gap-[10px] py-[5px] solid border-b-[1px] border-[#d9d9d9]"
                        >
                            <ReactSVG key={value.id} src={value.icon} className="" />
                            <h3 className="text-[#333] text-[12px] font-instrument">
                                {value?.name}
                            </h3>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default LinksDropDown;
