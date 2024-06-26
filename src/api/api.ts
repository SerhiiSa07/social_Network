import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "4f6f0f5b-0fa0-4768-a95a-1a1fdf939058" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId: number) {
    console.warn("Obsolete method. Please profileAPI abject");
    return profileAPI.getProfile(userId);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCapctha {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  message: Array<string>;
};

type LoginMeResponseType = {
  data: {
    id: number;
  };
  resultCode: number;
  message: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`);
  },
  login(email: string, password: string, rememberMe = false, captcha: null) {
    return instance.post<LoginMeResponseType>(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaURL() {
    return instance.get(`security/get-captcha-url`);
  },
};
