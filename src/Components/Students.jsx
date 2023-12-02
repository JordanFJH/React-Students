import data from "../Data";
import StudentItem from "./StudentItem";


export default function Students() {
    return (
        <div className="student-box">
            <h1>Student Handboook</h1>
            <section className="student-info">
                {data.map((student, index) => <StudentItem key={index} student={student} />)}
            </section>
        </div>
    )
}