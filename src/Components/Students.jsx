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

    function showStudent(student) {
        return (
        <div onClick={() => (showInfo(student))} className="student">
            <h2 class="font-bold text">{student.name}</h2>
        </div>
        )
    }


    return (
        <>
            <div className="student-box">
                <h1 class="text-3xl font-extrabold">Student Handboook</h1>
                <section className="student-info">
                    {data.map(showStudent)}
                </section>
            </div>

            {selected && 
            <div className="student-specs">
                <h1>{studentInfo.name}</h1>
                <h5>(Scroll to continue)</h5>
                <h2>Student Bio</h2>
                <h3>{studentInfo.bio}</h3>
                <h2>Scores</h2>
                {studentInfo.scores.map((score) => <Score score={score}/>)}
                <button onClick={closeButton} className="close-button">x</button>
            </div>}
        </>
    )
}