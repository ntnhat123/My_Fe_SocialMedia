export const setTokenLocalStorage = async (token: string)=> {
    try {
      await localStorage.clear();
      await localStorage.setItem("@token", token);
    } catch (error) {
      console.log(error);
    }
}

export const getTokenLocalStorage = async () => {
    try {
      const token = localStorage.getItem("@token");
      return token;
    } catch (error) {
      console.log(error);
    }
}