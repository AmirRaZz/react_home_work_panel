import { useState } from "react";
import LessonForm from "../../../common/LessonForm";
import { useAddLesson } from "../../../hooks/useLessons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddForm = () => {
    const { isLoading, mutateAsync } = useAddLesson();

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: Math.random().toString(10).slice(15),
        name: "",
        lessonCode: "",
        unit: "",
        teacher: "",
        taken: false,
    });

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await mutateAsync({
                ...formData,
            });
            navigate("/lessons");
            toast.success("با موفقیت اضافه شد");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <div>
            <h1 className="mb-6 font-bold text-xl">افزودن درس جدید</h1>
            <LessonForm
                onSubmit={submitHandler}
                lessonData={formData}
                lessonDataOnChange={changeHandler}
                isLoading={isLoading}
            />
        </div>
    );
};

export default AddForm;
