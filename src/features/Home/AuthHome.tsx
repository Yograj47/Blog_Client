import { Button } from "@mui/material";
import type { IUser } from "../../Utils/types/User";

export default function AuthHome({ user }: { user?: IUser }) {
    return (
        <div className="h-[90vh] flex flex-col items-center justify-center px-4 text-center gap-6">
            <h1 className="text-4xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-gray-700 text-lg">
                Explore your personalized dashboard, read your favorite blogs, or write your own.
            </p>

            <div className="flex gap-4">
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "20px", px: 4, py: 1.5, fontWeight: 600 }}
                >
                    Write a Blog
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: "20px", px: 4, py: 1.5, fontWeight: 600 }}
                >
                    Explore Blogs
                </Button>
            </div>
        </div>
    );
}
