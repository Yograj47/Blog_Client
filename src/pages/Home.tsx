import { useUser } from "../context/UserAuth"

function Home() {
    const { user } = useUser()
    return (
        <>
            {
                user ?
                    (
                        <div>
                            Welcome {user.name}
                        </div >
                    ) :
                    (
                        <div>Home</div>)
            }
        </>
    )
}

export default Home