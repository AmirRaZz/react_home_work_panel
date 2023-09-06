import Loading from "./Loading";
import TextField from "./TextField";

const studentsFormData = [
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
        label: "شماره دانشجویی",
        name: "studentCode",
    },
    {
        id: 4,
        label: "رشته تحصیلی",
        name: "field",
    },
];

const StudentsForm = ({
    onSubmit,
    studentData,
    studentDataOnChange,
    isLoading,
}) => {
    return (
        <div className="max-w-sm">
            <form className="space-y-4" onSubmit={onSubmit}>
                {studentsFormData.map((item) => {
                    return (
                        <TextField
                            key={item.id}
                            label={item.label}
                            name={item.name}
                            value={studentData[item.name] ?? ""}
                            onChange={studentDataOnChange}
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

export default StudentsForm;
