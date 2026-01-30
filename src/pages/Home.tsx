import AuthHome from "@/features/Home/AuthHome"
import GuestHome from "@/features/Home/GuestHome"
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