import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '4f6f0f5b-0fa0-4768-a95a-1a1fdf939058'}
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}
