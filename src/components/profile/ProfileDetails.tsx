import { useState } from "react";
import FormBtn from "@/components/common/FormBtn";

function ProfileDetails() {
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profileImage: null as File | null
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                alert("Image must be below 1MB");
                return;
            }
            setProfileData(prev => ({ ...prev, profileImage: file }));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // TODO: Implement save functionality
        console.log("Saving profile data:", profileData);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Profile Details
            </h1>
            <p className="text-gray-600 mb-6">
                Add your details to create a personal touch to your profile.
            </p>

            <div className="space-y-6">
                {/* Profile Picture Upload */}
                <div className="space-y-4">
                    <h2 className="text-sm font-medium text-gray-700">Profile Picture</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                            {profileData.profileImage ? (
                                <img
                                    src={URL.createObjectURL(profileData.profileImage)}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-2xl text-gray-500">?</span>
                            )}
                        </div>
                        <div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="image/png,image/jpeg"
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            fill="currentColor"
                                            viewBox="0 0 40 40"
                                            className="upload--logo"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                                            />
                                        </svg>
                                        <span className="font-medium">+ Upload Image</span>
                                    </div>
                                </div>
                            </label>
                            <p className="mt-1 text-sm text-gray-500">
                                Image must be below 1024x1024px. Use PNG or JPG format.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            placeholder="e.g John"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            placeholder="e.g Appleseed"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            placeholder="e.g email@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <FormBtn onClick={handleSave}>
                        Save
                    </FormBtn>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails; 