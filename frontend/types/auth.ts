export type UserRole = "admin" | "client"

export interface User {
    id: string
    email: string
    name: string
    role: UserRole
}

export interface AuthResponse {
    token: string
    user: User
}

