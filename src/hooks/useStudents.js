import { useMutation, useQuery } from "@tanstack/react-query";
import { addStudent, deleteStudent, getStudents } from "@/services/studentService";

export const useGetStudents=()=>
    useQuery({
        queryKey:["get-students"],
        queryFn:getStudents,
        retry:false,
        refetchOnWindowFocus:true
    })

export const useRemoveStudent = () => useMutation({ mutationFn: deleteStudent });

export const useAddStudent = () => useMutation({ mutationFn: addStudent });