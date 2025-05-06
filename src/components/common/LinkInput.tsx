import type { LinkInputProps } from "@/types"
import linkIcon from "../../assets/images/icon-link-header.svg"
import { useState } from "react"

function LinkInput({ updateLink, address, id }: LinkInputProps) {
    const [error, setError] = useState("")

    function validateUrl(url: string, platform: string) {
        if (!url) return true;

        // Basic URL validation
        try {
            new URL(url);
        } catch {
            setError("Please enter a valid URL");
            return false;
        }

        // Platform-specific validation
        switch (platform.toLowerCase()) {
            case "linkedin":
                if (!url.includes("linkedin.com")) {
                    setError("Please enter a valid LinkedIn URL");
                    return false;
                }
                break;
            case "github":
                if (!url.includes("github.com")) {
                    setError("Please enter a valid GitHub URL");
                    return false;
                }
                break;
            // Add more platform validations as needed
        }

        setError("");
        return true;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        // Get the platform name from the parent component
        const platform = document.querySelector(`[data-link-id="${id}"] .platform-name`)?.textContent || "";
        if (validateUrl(newValue, platform)) {
            updateLink(id, newValue);
        }
    }

    return (
        <div>
            <h3 className="mb-[7px]">Link</h3>
            <div className="relative bg-white cursor-pointer px-[12px] p-[8px] rounded-[8px] pl-[45px] hover:border-solid transition-all duration-300 hover:border-[1px] hover:border-[#633cff]">
                <input
                    onChange={handleChange}
                    value={address}
                    type="text"
                    className="outline-none border-none w-[100%]"
                    placeholder="Enter your link"
                />
                <img src={linkIcon} className="absolute top-[50%] left-[15px] translate-y-[-50%]" alt="" />
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    )
}

export default LinkInput
