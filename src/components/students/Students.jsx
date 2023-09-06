import { useGetStudents } from "../../hooks/useStudents";
import Loading from "../../common/Loading";
import Table from "./UserTable";
import { Link } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";
const Students = () => {
    const { data, isLoading } = useGetStudents();


    if (isLoading) return <Loading />;
    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-5">اطلاعات دانشجویان</h1>
                <Link
                    to="/students/add-student"
                    className="font-bold text-primary-900 flex items-center gap-x-2"
                >
                    <HiPlusCircle className="w-6 h-6" />
                    <span>اضافه کردن دانشجو</span>
                </Link>
            </div>
            <Table users={data} />
        </div>
    );
};

export default Students;
