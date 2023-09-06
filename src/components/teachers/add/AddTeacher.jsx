import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAddTeacher } from "../../../hooks/useTeachers";
import TeacherFrom from "../../../common/TeacherFrom";
const AddForm = () => {

    const { isLoading, mutateAsync } = useAddTeacher();
    const navigate = useNavigate();
    const [lessons, setLessons] = useState([]);
    const [formData, setFormData] = useState({
        id: Math.random().toString(10).slice(15),
        name: "",
        lastName: "",
        teacherCode: "",
    });

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await mutateAsync({
                ...formData,
                lessons,
            });
            navigate("/teachers");
            toast.success("با موفقیت اضافه شد");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <div>
            <h1 className="mb-6 font-bold text-xl">افزودن استاد جدید</h1>
            <TeacherFrom
                onSubmit={submitHandler}
                teacherData={formData}
                teacherDataOnChange={changeHandler}
                isLoading={isLoading}
                lessons={lessons}
                setLessons={setLessons}
            />
        </div>
    );
};

export default AddForm;
