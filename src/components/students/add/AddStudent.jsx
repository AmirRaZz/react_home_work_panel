import { useNavigate } from "react-router-dom";
import StudentsForm from "../../../common/StudentsForm";
import { useState } from "react";
import { useAddStudent } from "../../../hooks/useStudents";
import { toast } from "react-hot-toast";
const AddForm = () => {

    const { isLoading, mutateAsync } = useAddStudent();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: Math.random().toString(10).slice(15),
        name: "",
        lastName: "",
        studentCode: "",
        field: "",
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
            navigate("/students");
            toast.success("با موفقیت اضافه شد");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <div>
            <h1 className="mb-6 font-bold text-xl">افزودن دانشجوی جدید</h1>
            <StudentsForm
                onSubmit={submitHandler}
                studentData={formData}
                studentDataOnChange={changeHandler}
                isLoading={isLoading}
            />
        </div>
    );
};

export default AddForm;
