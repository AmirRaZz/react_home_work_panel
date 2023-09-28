import { Link } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";
import Table from "./TeacherTable";
import { useGetTeachers } from "@/hooks/useTeachers";
import Loading from "@/common/Loading";

const Teacher = () => {
    const { data, isLoading } = useGetTeachers();

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-5">اطلاعات اساتید</h1>
                <Link
                    to="/teachers/add-teacher"
                    className="font-bold text-primary-900 flex items-center gap-x-2"
                >
                    <HiPlusCircle className="w-6 h-6" />
                    <span>اضافه کردن استاد</span>
                </Link>
            </div>
            <Table data={data} />
        </div>
    );
};

export default Teacher;
