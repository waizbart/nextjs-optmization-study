import Sidebar from "@/components/sidebar";
import { getRandomUser } from "@/lib/actions/randomuser";

export default async function ServerSidebar() {
    const userData = await getRandomUser();
    
    return (
        <Sidebar
            name={userData.name}
            email={userData.email}
            avatar={userData.avatar}
        />
    );
}