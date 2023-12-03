import { useState } from "react"

export default function StudentItem({ student }) {
    let [showingStudent, setShowingStudent] = useState(false);


    return (
        <>
            <div className="student">
                <h2 class="text-5xl">{student.name}</h2>
            </div>
        </>
    )
}