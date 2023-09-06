import { useMutation, useQuery } from "@tanstack/react-query";
import { addLesson, deleteLesson, getLessons } from "../services/lessonService";

export const useGetLessons = () =>
    useQuery({
        queryKey: ["get-lessons"],
        queryFn: getLessons,
        retry: false,
        refetchOnWindowFocus: true,
    });

export const useRemoveLesson = () => useMutation({ mutationFn: deleteLesson });

export const useAddLesson = () => useMutation({ mutationFn: addLesson });
