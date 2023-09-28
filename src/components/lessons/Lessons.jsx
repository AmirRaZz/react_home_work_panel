import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGetLessons } from "@/hooks/useLessons";
import Loading from "@/common/Loading";
import Table from "./LessonTable";

const Lessons = () => {
    const { data, isLoading } = useGetLessons();

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-5">اطلاعات دروس</h1>
                <Link
                    to="/lessons/add-lesson"
                    className="font-bold text-primary-900 flex items-center gap-x-2"
                >
                    <HiPlusCircle className="w-6 h-6" />
                    <span>اضافه کردن درس</span>
                </Link>
            </div>
            <Table data={data} />
        </div>
    );
};

export default Lessons;
