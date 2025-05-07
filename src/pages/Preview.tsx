import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getData } from '@/firebase/getData';
import { auth } from '@/firebase/firebase';

interface Link {
    platform: string;
    platformIcon: string;
    url: string;
}

interface UserData {
    links: Link[];
    firstName?: string;
    lastName?: string;
    email?: string;
    profileImage?: string;
}

interface FirebaseData {
    id: string;
    links: Link[];
    userId: string;
}

function Preview() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const user = auth.currentUser;
                if (!user) {
                    navigate('/auth');
                    return;
                }

                const data = await getData('links') as FirebaseData[];
                if (data && data.length > 0) {
                    // Get the most recent document
                    const latestData = data[data.length - 1];
                    setUserData({
                        links: latestData.links || [],
                        email: user.email || undefined
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUserData();
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                            Back to Editor
                        </button>
                        <button
                            onClick={() => window.open('/preview', '_blank')}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Share Link
                        </button>
                    </div>
                </div>
            </header>

            {/* Preview Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-md mx-auto">
                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow-sm p-8 mb-6 text-center">
                        {userData?.profileImage ? (
                            <img
                                src={userData.profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                                <span className="text-2xl text-gray-500">
                                    {userData?.firstName?.[0] || userData?.email?.[0] || '?'}
                                </span>
                            </div>
                        )}
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                            {userData?.firstName && userData?.lastName
                                ? `${userData.firstName} ${userData.lastName}`
                                : userData?.email?.split('@')[0] || 'User'}
                        </h1>
                        <p className="text-gray-600">{userData?.email}</p>
                    </div>

                    {/* Links List */}
                    <div className="space-y-4">
                        {userData?.links?.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={link.platformIcon}
                                        alt={link.platform}
                                        className="w-6 h-6 mr-3"
                                    />
                                    <span className="font-medium text-gray-900">
                                        {link.platform}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Preview;
