import { TagsInput } from "react-tag-input-component";
import Loading from "./Loading";
import TextField from "./TextField";

const teachersFormData = [
    {
        id: 1,
        label: "نام",
        name: "name",
    },
    {
        id: 2,
        label: "نام خانوادگی",
        name: "lastName",
    },
    {
        id: 3,
        label: "شماره پرسنلی",
        name: "teacherCode",
    }
];


const TeacherFrom = ({
    onSubmit,
    teacherData,
    teacherDataOnChange,
    isLoading,
    lessons,
    setLessons,
}) => {
    return (
        <div className="max-w-sm">
            <form className="space-y-4" onSubmit={onSubmit}>
                {teachersFormData.map((item) => {
                    return (
                        <TextField
                            key={item.id}
                            label={item.label}
                            name={item.name}
                            value={teacherData[item.name] ?? ""}
                            onChange={teacherDataOnChange}
                        />
                    );
                })}
                <div>
                    <label className="mb-2 block" htmlFor="tags">
                        دروس گرفته شده
                    </label>
                    <TagsInput
                        id="tags"
                        value={lessons}
                        onChange={setLessons}
                        name="lessons"
                    />
                </div>
                <div>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <button className="btn btn--primary w-full">
                            تایید
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TeacherFrom