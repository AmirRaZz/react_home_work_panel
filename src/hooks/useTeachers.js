import { useMutation, useQuery } from "@tanstack/react-query";
import {
    addTeacher,
    deleteTeacher,
    getTeachers,
} from "../services/teacherService";

export const useGetTeachers = () =>
    useQuery({
        queryKey: ["get-teachers"],
        queryFn: getTeachers,
        retry: false,
        refetchOnWindowFocus: true,
    });

export const useRemoveTeacher = () =>
    useMutation({ mutationFn: deleteTeacher });

export const useAddTeacher = () => useMutation({ mutationFn: addTeacher });
