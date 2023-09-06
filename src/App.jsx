import Students from "./components/students/Students";
import Teachers from "./components/teachers/Teachers";
import Lessons from "./components/lessons/Lessons";
import { Link, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/Home";
import AddLesson from "./components/lessons/add/AddLesson";
import AddStudent from "./components/students/add/AddStudent";
import AddTeacher from "./components/teachers/add/AddTeacher";

function App() {
    return (
        <div className="grid grid-cols-4 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
                <ul className="flex flex-col space-y-3 text-lg">
                    <li className="hover:bg-gray-200 font-semibold  rounded-md p-2">
                        <Link className="block" to="/">
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 rounded-md p-2">
                        <Link className="block" to="students">
                            دانشجویان
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 rounded-md p-2">
                        <Link className="block" to="teachers">
                            اساتید
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 rounded-md p-2">
                        <Link className="block" to="lessons">
                            دروس
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-3 overflow-y-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/students" element={<Students />}></Route>
                    <Route path="/teachers" element={<Teachers />}></Route>
                    <Route path="/lessons" element={<Lessons />}></Route>
                    <Route
                        path="/lessons/add-lesson"
                        element={<AddLesson />}
                    ></Route>
                    <Route
                        path="/students/add-student"
                        element={<AddStudent />}
                    ></Route>
                    <Route
                        path="/teachers/add-teacher"
                        element={<AddTeacher />}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
