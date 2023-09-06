import http from "./httpService"

export const getStudents=()=>{
    return http.get("students").then(data=>data.data)
}

export const deleteStudent = (id) => {
    return http.delete(`students/${id}`).then((data) => data.data);
};

export const addStudent = (data) => {
    return http.post(`students`, data).then((data) => data.data);
};