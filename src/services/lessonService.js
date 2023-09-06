import http from "./httpService";

export const getLessons = () => {
    return http.get("lessons").then((data) => data.data);
};

export const deleteLesson = (id) => {
    return http.delete(`lessons/${id}`).then((data) => data.data);
}

export const addLesson = (data) => {
    return http.post(`lessons`,data).then((data) => data.data);
}