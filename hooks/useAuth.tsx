import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { useRouter } from 'next/router'
import * as React from 'react'


interface IAuth {
    user: User | null //유저
    signUp: (email: string, password: string) => Promise<void> // 회원등록
    signIn: (email: string, password: string) => Promise<void> // 로그인
    logout: () => Promise<void> // 로그아웃
    error: string | null // 에러
    loading: boolean // 로딩
}

const AuthContext = React.createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
})


interface AuthProviderProps  {
    children: React.ReactNode
}

const AuthProvider = ({children}: AuthProviderProps) => {
    const [loading, setLoading] = React.useState(false)
    const [user, setUser] = React.useState<User | null>(null)
    const [error, setError] = React.useState(null)
    const [initialLoading, setInitialLoading] = React.useState(true)
    const router = useRouter()

    // Persisting the user (사용자 유지)
    React.useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Logged in...
                    // 로그인 시
                    setUser(user)
                    setLoading(false)
                } else {
                    // Not logged in...
                    // 로그아웃시
                    setUser(null)
                    setLoading(true)
                    router.push('/login')
                }

                setInitialLoading(false)
            }),
            [auth]
    )

    // 회원등록
    const signUp = async (email: string, password: string) => {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                setUser(userCredential.user)
                router.push('/')
                setLoading(false)
            }
        )
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false)) // 마무리 후 로딩해제
    }

    // 로그인
    const signIn = async (email: string, password: string) => {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                router.push('/')
                setLoading(false)
            }
        )
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false))
    }

    // 로그아웃
    const logout = async () => {
        setLoading(true)

        signOut(auth)
            .then(()=>{
                setUser(null)
            })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false))
    }

    const memoValue = React.useMemo(
        () => ({
            user,
            signUp,
            signIn,
            loading,
            logout,
            error
        }),
        [user, loading]
    )
    return (
        <AuthContext.Provider value={memoValue}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return React.useContext(AuthContext)
}

