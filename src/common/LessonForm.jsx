import Loading from "./Loading";
import TextField from "./TextField";
const lessonsFormData = [
    {
        id: 1,
        label: "نام درس",
        name: "name",
    },
    {
        id: 2,
        label: "کد درس",
        name: "lessonCode",
    },
    {
        id: 3,
        label: "تعداد واحد",
        name: "unit",
    },
    {
        id: 4,
        label: "مدرس",
        name: "teacher",
    },
];

const LessonForm = ({
    onSubmit,
    lessonData,
    lessonDataOnChange,
    isLoading,
}) => {
    return (
        <div className="max-w-sm">
            <form className="space-y-4" onSubmit={onSubmit}>
                {lessonsFormData.map((item) => {
                    return (
                        <TextField
                            key={item.id}
                            label={item.label}
                            name={item.name}
                            value={lessonData[item.name] ?? ""}
                            onChange={lessonDataOnChange}
                        />
                    );
                })}
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

export default LessonForm;
