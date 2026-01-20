import Image from "next/image";

export default function Sidebar(userData: {
    name: string;
    email: string;
    avatar: string;
}) {
    return (
        <div className="w-1/4 bg-gray-200 p-4 h-full text-black">
            <h2 className="text-2xl font-bold text-green-500">Sidebar</h2>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <Image
                src={userData.avatar}
                alt="User Avatar"
                width={200}
                height={200}
                priority
            />
        </div>
    );
}