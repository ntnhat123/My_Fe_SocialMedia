export const apiRouter = {
    authLogin: '/auth/login',
    authRegister: '/auth/register',
    logout: '/auth/logout',
    loginByToken: '/auth/loginToken',
    getUserById: '/user/user',
    updateUser: '/user/updateUser',
    follow: '/user/follow',
    unfollow: '/user/unfollow',
    searchUser: '/user/searchUser',
    //post
    createPost : '/post/createPost',
    getPost: '/post/getPost',
    getPostOfUser: '/post/getPostOfUserId',
    likePost: '/post/likePost',
    deletePost: '/post/deletePost',
    updatePost: '/post/updatePost',
    // comment
    getAllComment: '/comment/getAllComment',
    createComment: '/comment/createComment',
    deleteComment: '/comment/deleteComment',
    
}