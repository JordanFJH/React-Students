import { useState } from "react";
import data from "../Data";
import Score from "./Score";






export default function Students() {
    const [selected, setSelected] = useState(false);
    const [studentInfo, setStudentInfo] = useState({});

    function showInfo(student) {
        setStudentInfo(student);
        setSelected(true);
    }

    function closeButton() {
        setSelected(false);
    }

    function showStudent(student, index) {
        return (
        <div onClick={() => (showInfo(student))} className="student" key={index}>
            <h2 class="font-bold text-2xl">{student.name}</h2>
        </div>
        )
    }


    return (
        <div className="holder">
            <div className="student-box">
                <h1 class="text-3xl font-extrabold">Student Handboook</h1>
                <h5 class="italic mb-2">(Click on student for more info)</h5>
                <section className="student-info">
                    {data.map(showStudent)}
                </section>
            </div>

            {selected && 
            <div className="student-specs">
                <h1 class="text-3xl font-extrabold underline">{studentInfo.name}</h1>
                <h5 class="italic mb-2">(Scroll to continue)</h5>
                <h2 class="mb-2 text-2xl font-bold">-- Student Bio --</h2>
                <h3>{studentInfo.bio}</h3>
                <br />
                <h2 class="mb-2 text-2xl font-bold">-- Scores --</h2>
                {studentInfo.scores.map((score, index) => <Score key={index} score={score}/>)}
                <button onClick={closeButton} className="close-button">X</button>
            </div>}
        </div>
    )
}