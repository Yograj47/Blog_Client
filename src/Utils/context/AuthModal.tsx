import { createContext, useContext, useState } from "react";

type AuthModalType = "signin" | "signup" | null

interface AuthModalContextType {
    authModal: AuthModalType;
    setAuthModal: (type: AuthModalType) => void;
}

const AuthModalContext = createContext<AuthModalContextType>({
    authModal: null,
    setAuthModal: () => { }
})

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
    const [authModal, setAuthModal] = useState<AuthModalType>(null);
    return (
        <AuthModalContext.Provider value={{ authModal, setAuthModal }}>
            {children}
        </AuthModalContext.Provider>
    )
}

export const useAuthModal = () => useContext(AuthModalContext);