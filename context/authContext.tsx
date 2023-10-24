import React,{createContext, useContext} from 'react'
import { getTokenLocalStorage, setTokenLocalStorage } from '@/Provider/localStorage'
import { useRouter } from 'next/router'
import { IUser } from '@/model/user'
import { getLoginByEmail } from '@/api/auth/login'
import { getRegisterByEmail } from '@/api/auth/register'
import { loginbyToken } from '@/api/auth/loginBytoken'
import { getUserByIds } from '@/api/user/user'


interface IAuthContext {
    login: (email:string, password:string) => void
    register: (
        fullName: string,
        email: string,
        password: string,
        gender: string
      ) => void
    logout: () => void
    user: IUser | null
    loading: boolean
    error: string
    token: string 
    getUserById: (id: string) => void
}

const AuthContext = createContext<IAuthContext>({
    login: () => {},
    register: () => {},
    logout: () => {},
    user: {} as IUser,
    loading: false,
    error: '',
    token: '',
    getUserById: () => {},
})


interface AuthProviderProps {
    children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = React.useState<IUser> ({} as IUser)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>('')
    const [token, setToken] = React.useState<string>('')

    const login = async (email: string, password: string) => {
        try {
          const res = await getLoginByEmail(email, password);
          if (res.status === 200) {
            if (res.data.status) {
              setUser(res.data.data);
              setTokenLocalStorage(res.data.token);
              setToken(res.data.token);
              router.push("/");
              setLoading(true);
            } else {
                setError(res.data.message);
              setLoading(false);
            }
          } else {
            setError(res.data.message);
            setLoading(false);
          }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const register = async (fullName:string,email:string,password:string,gender:string) => {
        try{
            const res = await getRegisterByEmail(fullName,email,password,gender)
            if(res.status === 200){
                if(res.data.status){
                    setUser(res.data.data)
                    setTokenLocalStorage(res.data.token)
                    setToken(res.data.token)
                    router.push('/login')
                    setLoading(true)
                }else{
                    setError(res.data.message)
                    setLoading(false)
                }
            }else{
                setError(res.data.message)
                setLoading(false)
            }
        }   catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    const autoLogin = async () => {
        const token =  await getTokenLocalStorage()
        if(!token){
            router.push('/login')
        }
        try{
            const res = await loginbyToken(token as string)
            if(res.status === 200){
                if(res.data.status){
                    setUser(res.data.data)
                    setToken(res.data.token)
                    setLoading(true)
                }else{
                    setError(res.data.message)
                    setLoading(false)
                }
            }else{
                setError(res.data.message)
                setLoading(false)
            }
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        autoLogin()
    },[])

    React.useEffect(() => {
        const autoRedirect = async () => {
          const token = await getTokenLocalStorage();
          if (!token) {
            // router.push("/auth");
          } else {
            // router.push("/");
          }
        };
        autoRedirect();
    }, [user]);
    

    const logout = () => {
        localStorage.removeItem('token')
        setUser({} as IUser)
        setToken('')
        router.push('/login')
    }

    const getUserById = async (id: string) => {
        try {
          const res = await getUserByIds(id);
            if (res.status === 200) {   
                if (res.data.status) {
                    setUser(res.data.data);
                    setLoading(true);
                } else {
                    setError(res.data.message);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }



    const authContextValue : IAuthContext = {
        login,
        register,
        logout,
        user,
        loading,
        error,
        token,
        getUserById
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}