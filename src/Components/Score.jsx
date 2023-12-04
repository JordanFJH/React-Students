export default function Score({score}) {
    return (
        <div>
            <h3 class="mb-2"><span>{score.score}%</span> - ({score.date})</h3>
        </div>
    )
}