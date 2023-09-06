import { HiTrash } from "react-icons/hi";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { teacherListTableHeads } from "../../constants/tableHeads";
import { useRemoveTeacher } from "../../hooks/useTeachers";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

function Table({ data }) {
    const { mutateAsync } = useRemoveTeacher();
    const queryClient = useQueryClient();

    const  removeTeacherHandler=async(id)=>{
        try {
            await mutateAsync(id);
            toast.success("حذف شد.");
            queryClient.invalidateQueries({ queryKey: ["get-teachers"] });
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="shadow-sm overflow-auto my-8">
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                <thead>
                    <tr>
                        {teacherListTableHeads.map((item) => {
                            return (
                                <th
                                    className="whitespace-nowrap table__th"
                                    key={item.id}
                                >
                                    {item.label}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((teacher,index) => {
                        return (
                            <tr key={teacher.id}>
                                <td className="table__td">
                                    {toPersianNumbers(index+1)}
                                </td>
                                <td className="table__td  whitespace-nowrap">
                                    {teacher.name}
                                </td>
                                <td className="table__td">
                                    {teacher.lastName}
                                </td>
                                <td className="table__td">
                                    {toPersianNumbers(teacher.teacherCode)}
                                </td>
                                <td className="table__td">
                                    <div className="flex flex-col gap-y-2 items-start">
                                        {teacher.lessons.map(
                                            (lesson,index) => {
                                                return (
                                                    <span
                                                        className="badge badge--success"
                                                        key={index}
                                                    >
                                                        {lesson}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </td>
                                <td className="table__td font-bold text-lg">
                                    <div className="flex items-center gap-x-4">
                                        <button
                                            onClick={() => removeTeacherHandler(teacher.id)}
                                        >
                                            <HiTrash className="text-rose-600 w-6 h-6" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Table;
