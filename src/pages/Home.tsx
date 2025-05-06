import Header from "@/components/common/Header";
import LinksDropDown from "@/components/common/LinksDropDown";
import { useState, useEffect } from "react";
import data from "@/assets/data/dropDown";
import LinkInput from "@/components/common/LinkInput";
import type { ArrayProps, LinkList } from "@/types";
import FormBtn from "@/components/common/FormBtn";
import { addData } from "@/firebase/addData";
import { useNavigate } from "react-router";
import { getData } from "@/firebase/getData";
import { auth } from "@/firebase/firebase";
import ProfileDetails from "@/components/profile/ProfileDetails";

interface FirebaseData {
    id: string;
    links: {
        platform: string;
        platformIcon: string;
        url: string;
    }[];
    userId: string;
}

function Home() {
    const [LinksList, setLinksList] = useState<LinkList[]>([{ data: data[0], id: "1", address: "" }]);
    const [dropDownContentList] = useState([data]);
    const [isSaving, setIsSaving] = useState(false);
    const [activeContent, setActiveContent] = useState("Links");
    const navigate = useNavigate();

    useEffect(() => {
        async function loadExistingLinks() {
            try {
                const user = auth.currentUser;
                if (!user) {
                    navigate('/auth');
                    return;
                }

                const savedData = await getData('links') as FirebaseData[];
                if (savedData && savedData.length > 0) {
                    // Get the most recent document
                    const latestData = savedData[savedData.length - 1];
                    if (latestData.links && latestData.links.length > 0) {
                        // Convert saved links to LinkList format
                        const convertedLinks = latestData.links.map((link, index) => {
                            // Find matching platform data
                            const platformData = data.find(d => d.name === link.platform) || data[0];
                            return {
                                data: platformData,
                                id: (index + 1).toString(),
                                address: link.url,
                                error: ""
                            };
                        });
                        setLinksList(convertedLinks);
                    }
                }
            } catch (error) {
                console.error('Error loading existing links:', error);
            }
        }

        loadExistingLinks();
    }, [navigate]);

    function addNewLink() {
        const updatedList = LinksList.map((item) =>
            item.address.length === 0 ? { ...item, error: "Please fill the link" } : { ...item, error: "" }
        );

        if (updatedList.some((item) => item.error)) {
            setLinksList(updatedList);
            return;
        }

        setLinksList(prev => {
            const newId = prev.length > 0 ? (parseInt(prev[prev.length - 1].id) + 1).toString() : "1";
            return [...prev, { data: data[0], id: newId, address: "", error: "" }];
        });
    }

    function updateLink(id: string, newAddress: string) {
        setLinksList(prev => prev.map((item) => item.id === id ? { ...item, address: newAddress } : item))
    }

    function updateDropDownArr(id: string, activeArr: ArrayProps) {
        setLinksList(prev => prev.map((item) => item.id === id ? { ...item, data: activeArr } : item))
    }

    function removeObj(id: string) {
        const filtered = LinksList.filter((item) => item.id !== id);
        setLinksList(filtered);
    }

    async function handleSave() {
        try {
            setIsSaving(true);

            // Validate all links have addresses
            const hasEmptyLinks = LinksList.some(link => !link.address);
            if (hasEmptyLinks) {
                setLinksList(prev =>
                    prev.map(link =>
                        !link.address ? { ...link, error: "Please fill the link" } : link
                    )
                );
                return;
            }

            // Prepare data for Firebase
            const linksData = LinksList.map(link => ({
                platform: link.data.name,
                platformIcon: link.data.icon,
                url: link.address
            }));

            // Save to Firebase
            await addData("links", { links: linksData });

            // Navigate to preview page after successful save
            navigate("/preview");
        } catch (error) {
            console.error("Error saving links:", error);
        } finally {
            setIsSaving(false);
        }
    }

    const renderLinkContent = (index: number) => {
        const link = LinksList[index];
        if (!link) return null;

        return (
            <foreignObject x="35" y={278 + (index * 64)} width="237" height="44">
                <div className="sc-hBURej fxdOIl" style={{ background: "rgb(26, 26, 26)", height: "100%", display: "flex", alignItems: "center", padding: "0 16px", borderRadius: "8px" }}>
                    <div className="left--wrapper" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div className="logo--container">
                            <img src={link.data.icon} alt={link.data.name} width="16" height="16" />
                        </div>
                        <p style={{ color: "white", margin: 0 }}>{link.data.name}</p>
                    </div>
                    <img
                        src="/Link-Sharing-App/static/media/icon-arrow-right.21bc7dd4ec89a712e1e32835433f9e69.svg"
                        alt="right arrow"
                        style={{ marginLeft: "auto" }}
                    />
                </div>
            </foreignObject>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Phone Preview */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="308"
                                height="632"
                                fill="none"
                                viewBox="0 0 308 632"
                                className="w-full max-w-md mx-auto"
                            >
                                <path stroke="#737373" d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z" />
                                <path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z" />
                                <circle cx="153.5" cy="112" r="48" fill="#EEE" />
                                <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
                                <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />

                                {/* Render actual links */}
                                {LinksList.map((_, index) => renderLinkContent(index))}

                                {/* Render placeholder rects for remaining slots */}
                                {Array.from({ length: Math.max(0, 5 - LinksList.length) }).map((_, index) => (
                                    <rect
                                        key={`placeholder-${index}`}
                                        width="237"
                                        height="44"
                                        x="35"
                                        y={278 + ((LinksList.length + index) * 64)}
                                        fill="#FFF"
                                        rx="8"
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6">
                        <Header activeContent={activeContent} setActiveContent={setActiveContent} />

                        {activeContent === "Links" ? (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    Customize your links
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    Add/edit/remove links below and then share all your profiles with the world
                                </p>

                                <button
                                    onClick={addNewLink}
                                    className="w-full py-3 px-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200"
                                >
                                    + Add new link
                                </button>

                                <div className="mt-6 space-y-4">
                                    {LinksList.map((link) => (
                                        <div
                                            key={link.id}
                                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="font-medium text-gray-900">
                                                    Link #{link.id}
                                                </h2>
                                                <button
                                                    onClick={() => removeObj(link.id)}
                                                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                                                        Platform
                                                    </h3>
                                                    {dropDownContentList.map((array1) => (
                                                        <div key={link.id} className="space-y-3">
                                                            <LinksDropDown
                                                                array={array1}
                                                                updateDrop={updateDropDownArr}
                                                                id={link.id}
                                                                active={link.data}
                                                            />
                                                            <div>
                                                                <LinkInput
                                                                    updateLink={updateLink}
                                                                    address={link.address}
                                                                    id={link.id}
                                                                />
                                                                {link.error && (
                                                                    <span className="text-red-500 text-sm mt-1 block">
                                                                        {link.error}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <FormBtn onClick={handleSave} disabled={isSaving}>
                                        {isSaving ? "Saving..." : "Save"}
                                    </FormBtn>
                                </div>
                            </div>
                        ) : (
                            <ProfileDetails />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
