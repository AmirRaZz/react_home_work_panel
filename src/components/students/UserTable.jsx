import { HiTrash } from "react-icons/hi";
import { userListTableHeads } from "../../constants/tableHeads";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useRemoveStudent } from "@/hooks/useStudents";

function Table({ users }) {
    const { mutateAsync } = useRemoveStudent();
    const queryClient = useQueryClient();

    const removeUserHandler=async(id) => {
        try {
            await mutateAsync(id);
            toast.success("حذف شد.");
            queryClient.invalidateQueries({ queryKey: ["get-students"] });
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="shadow-sm overflow-auto my-8">
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                <thead>
                    <tr>
                        {userListTableHeads.map((item) => {
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
                    {users.map((user,index) => {
                        return (
                            <tr key={user.id}>
                                <td className="table__td">{toPersianNumbers(index+1)}</td>
                                <td className="table__td  whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="table__td">{user.lastName}</td>
                                <td className="table__td">
                                    {toPersianNumbers(user.studentCode)}
                                </td>
                                <td className="table__td">{user.field}</td>
                                <td className="table__td font-bold text-lg">
                                    <div className="flex items-center gap-x-4">
                                        <button
                                            onClick={() => removeUserHandler(user.id)}
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
