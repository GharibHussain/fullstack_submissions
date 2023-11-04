import Content from "./Content";

const Header = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>  
      </div>
      )
  }
  
  
  
  const Total = ({ course }) => {
    //const totalNumOfEx = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises 
    // Instead, we use the following 'reduce' funcrion to calculate the sum of exercises regardless of number of parts
    const totalNumOfEx = course.parts.reduce((totalNumOfExercises, currentExercise) => totalNumOfExercises + currentExercise.exercises, 0);

    return (
      <div>
        <h3>total of exercises {totalNumOfEx}</h3>
      </div>
    )
}
  
 

const Course = ({ course }) => {

  return(
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )

}

export default Course