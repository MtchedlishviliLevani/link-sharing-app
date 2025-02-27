import Header from "@/components/common/Header";
import phoneMockup from "@images/phone-mockup.svg";
import LinksDropDown from "@/components/common/LinksDropDown";
import { useState } from "react";
import data from "@/assets/data/dropDown";
import LinkInput from "@/components/common/LinkInput";
import type { ArrayProps, LinkList } from "@/types";



function Home() {
    const [LinksList, setLinksList] = useState<LinkList[]>([{ data: data[0], id: "1", address: "" }])
    console.log(data[0])
    function addNewLink() {
        // if address is empty return alert
        if (LinksList.some((item) => item.address.length === 0)) return alert("Please fill the link");

        setLinksList(prev => {
            const newId = prev.length > 0 ? (parseInt(prev[prev.length - 1].id) + 1).toString() : "1";
            return [...prev, { data: data[0], id: newId, address: "" }];
        });
    }
    // this function should invoke when the user updates the link, when saved it should update the link in the list
    function updateLink(id: string, newAddress: string) {
        const foundItem = LinksList.find((item) => item.id == id);
        if (foundItem) foundItem.address = newAddress;
        setLinksList(prev => prev.map(item => item.id === id ? { ...item, address: newAddress } : { ...item }))
    }

    function updateDropDownArr(id: string, activeArr: ArrayProps) {
        setLinksList(prev => prev.map((item) => item.id === id ? { ...item, data: activeArr } : item))
    }




    function removeObj(id: string) {
        const filtered = LinksList.filter((item) => item.id !== id);
        setLinksList(filtered);
    }

    const [dropDownContentList] = useState([data])



    return (
        <div>
            home
            <div className="flex flex-col gap-[40px]">
                <Header />
                <img className="hidden xl:block" src={phoneMockup} alt="" />
                <div className="">
                    <h1 className="font-[700] text-[24px] text-[#333]">Customize your links</h1>
                    <p className="text-[#737373] text-[16px] leading-[150%] my-[7px]">
                        Add/edit/remove links below and then share all your profiles with the
                        world
                    </p>
                    <button onClick={addNewLink} className="w-[100%] p-[8px] md:p-[10px] hover:bg-[#efebff] px-[12px] md:px-[20px] cursor-pointer rounded-[8px] border-solid border-[#633cff] border-[1px] text-[#633cff] font-[600]">
                        + Add new link
                    </button>

                    <div>
                        {LinksList.map((array) => (
                            <div key={array.id}>

                                <div className="flex justify-between">
                                    <h1> = Link #{array.id}</h1>
                                    <button onClick={() => removeObj(array.id)}>Remove</button>
                                </div>
                                <div><h3>platform</h3>
                                    {dropDownContentList.map((array1) => <div key={array.id}> <LinksDropDown array={array1} updateDrop={updateDropDownArr} id={array.id} active={array.data} /><div>
                                        <LinkInput updateLink={updateLink} address={array.address} id={array.id} />
                                    </div>  </div>)}
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-[10px] flex flex-col gap-[5px]">{dropDownContentList.map((array, index) => <div key={index}> <LinksDropDown array={array} /></div>)}
                    </div> */}

                </div>



                {/* Hidden */}
                {/* <div>
                <img src={phonreIlustration} alt="" />
                <h2>Let's get you started</h2>
                <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
            </div> */}
            </div></div>
    );
}

export default Home;
