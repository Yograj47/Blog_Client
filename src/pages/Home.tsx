import AuthHome from "@/Components/Home/AuthHome"
import GuestHome from "@/Components/Home/GuestHome"
import { useUser } from "@/Utils/context/UserAuth"

function Home() {
    const { user } = useUser()
    return (
        <>
            {
                user ?
                    (
                        <AuthHome user={user} />
                    ) :
                    (
                        <GuestHome />
                    )
            }
        </>
    )
}

export default Home