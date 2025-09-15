export interface IUser {
    _id: string;
    name: string;
    role: string;
    exp: number;
}

export type AuthContextType = {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    logout: () => void;
};