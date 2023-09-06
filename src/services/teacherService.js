import http from "./httpService";

export const getTeachers = () => {
    return http.get("teachers").then((data) => data.data);
};

export const deleteTeacher = (id) => {
    return http.delete(`teachers/${id}`).then((data) => data.data);
};

export const addTeacher = (data) => {
    return http.post(`teachers`, data).then((data) => data.data);
};