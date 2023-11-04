const Part = ({ part }) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
}




const Content = ({ course }) => {

    return (
      <div>
        <ul>
          {course.parts.map(part =>
            <Part key={part.id} part={part} />
            )}
        </ul>
      </div>
    )
  }

export default Content