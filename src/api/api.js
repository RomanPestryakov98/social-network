import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'ff611dba-41a8-4160-ac2a-11d777b915de'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => res.data)
	},

	getUserProfile(userId) {
		return instance.get(`/profile/${userId}`)
			.then(res => res.data)
	},

	setFollowingOnUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(res => res.data)
	},

	deleteFollowingOnUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(res => res.data)
	},
}

export const profileAPI = {
	getUserProfile(userId) {
		return instance.get(`/profile/${userId}`)
			.then(res => res.data)
	},

	getUserStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(res => res.data)
	},

	updateUserStatus(status) {
		return instance.put(`profile/status`, { status })
			.then(res => res.data)
	},

	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(res => res.data)
	},

	updateProfile(data) {
		return instance.put(`profile`, data)
			.then(res => res.data)
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`/auth/me`)
			.then(res => res.data)
	},

	login(data) {
		return instance.post(`/auth/login`, { email: data.email, password: data.password, rememberMe: data.rememberMe, captcha: data.captcha })
			.then(res => res.data)
	},

	logout() {
		return instance.delete(`/auth/login`)
			.then(res => res.data)
	}
}

export const securityAPI = {
	getCaptcha() {
		return instance.get('security/get-captcha-url')
			.then(res => res.data.url)
	}
}