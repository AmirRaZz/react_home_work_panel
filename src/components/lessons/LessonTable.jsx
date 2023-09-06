import { HiMinus, HiPlusCircle, HiTrash } from "react-icons/hi";
import { lessonListTableHeads } from "../../constants/tableHeads";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { useRemoveLesson } from "../../hooks/useLessons";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useState } from "react";

function Table({ data }) {

    const { mutateAsync } = useRemoveLesson();
    const queryClient = useQueryClient();
    const [units, setUnits] = useState(0);

    const removeLessonHandler = async (id) => {
        try {
            await mutateAsync(id);
            toast.success("حذف شد.");
            queryClient.invalidateQueries({ queryKey: ["get-lessons"] });
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const addLessonHandler = (lesson) => {
        if (units <= 20 && !lesson.taken == true) {
            lesson.taken = true;
            setUnits((units) => units + parseInt(lesson.unit));
            toast.success("انتخاب شد.");
        } else if (units > 20) {
            toast.error("سقف انتخاب 20 واحد می باشد.");
        }
    };

    const deleteLessonHandler = (lesson) => {
        if (units > 0 && lesson.taken == true) {
            lesson.taken = false;
            setUnits((units) => units - parseInt(lesson.unit));
            toast.success("از دروس انتخابی حذف شد.");
        }
    };

    return (
        <div className="shadow-sm overflow-auto mb-8">
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-4">
                <thead>
                    <tr>
                        {lessonListTableHeads.map((item) => {
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
                    {data.map((lesson,index) => {
                        return (
                            <tr key={lesson.id}>
                                <td className="table__td">
                                    {toPersianNumbers(index+1)}
                                </td>
                                <td className="table__td  whitespace-nowrap">
                                    {lesson.name}
                                </td>
                                <td className="table__td">
                                    {toPersianNumbers(lesson.lessonCode)}
                                </td>
                                <td className="table__td">
                                    {toPersianNumbers(lesson.unit)}
                                </td>
                                <td className="table__td">{lesson.teacher}</td>
                                <td className="table__td font-bold text-lg">
                                    <div className="flex items-center gap-x-4">
                                        {lesson.taken ? (
                                            <span className="w-6 h-6"></span>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    removeLessonHandler(
                                                        lesson.id
                                                    )
                                                }
                                            >
                                                <HiTrash className="text-rose-600 w-6 h-6" />
                                            </button>
                                        )}
                                        {lesson.taken ? (
                                            <button
                                                onClick={() =>
                                                    deleteLessonHandler(lesson)
                                                }
                                            >
                                                <HiMinus className="text-blue-500 w-6 h-6" />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    addLessonHandler(lesson)
                                                }
                                            >
                                                <HiPlusCircle className="text-blue-500 w-6 h-6" />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h1 className="text-base font-bold mb-5"> جمع واحد: {units}</h1>
        </div>
    );
}
export default Table;
