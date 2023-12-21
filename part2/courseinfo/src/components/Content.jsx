const Part = ({ part }) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
}

// parts of a course
const Content = ({ course }) => {
    let parts = course.parts
    return (
      <div>
        <ul>
          {parts.map(part =>
            <Part key={part.id} part={part} />
            )}
        </ul>
      </div>
    )
  }

export default Content
