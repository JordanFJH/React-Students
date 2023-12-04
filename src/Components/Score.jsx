export default function Score({score}) {
    return (
        <div>
            <h3><span>{score.score}%</span> - ({score.date})</h3>
        </div>
    )
}