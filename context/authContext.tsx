import React,{createContext, useContext} from 'react'
import { getTokenLocalStorage, setTokenLocalStorage } from '@/Provider/localStorage'
import { useRouter } from 'next/router'
import { IUser } from '@/model/user'
import { getLoginByEmail } from '@/api/auth/login'
import { getRegisterByEmail } from '@/api/auth/register'
import { loginbyToken } from '@/api/auth/loginBytoken'
import { getUserByIds, updateUser } from '@/api/user/user'
import { getLogout } from '@/api/auth/logout'


interface IAuthContext {
    login: (email:string, password:string) => void
    register: (
        fullName: string,
        email: string,
        password: string,
        gender: string
      ) => void
    editUser: (
        id: string,
        fullName: string,
        avatar: string,
        gender: string,
        address: string,
        story: string,
        mobile: string,
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
    editUser: () => {},
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

    const editUser = async (
        id: string,
        fullName: string,
        avatar: string,
        gender: string,
        address: string,
        story: string,
        mobile: string,
    ) => {
        try{
            const res = await updateUser(router.query.id as string, fullName, avatar,gender, address, story, mobile);
            console.log(res)
            if(res){
                    setUser(res.data)
                    setLoading(true)
            }else{
                    setError(res)
                    setLoading(false)
            }
        } catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    const autoLogin = async () => {
        const token =  await getTokenLocalStorage()
        if(!token){
            if(router.pathname !== '/register'){
                router.push('/login')
            }else{
                router.push('/register')
            }
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
    

    const logout = async () => {
        // vieets code logout
        try {
            const res = await getLogout();
            console.log(res)
            if (res.status === 200) {
                if (res.data.status) {
                setUser({} as IUser);
                setToken("");
                setTokenLocalStorage("");
                router.push("/login");
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
        editUser,
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