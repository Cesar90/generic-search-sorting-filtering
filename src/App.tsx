import people from "./mock-data/people"
import widgets from "./mock-data/widgets"

function App() {
  return (
    <>
      <h2>Widgest:</h2>
      {widgets.map(widget => {
        return (
          <h3>{widget.title}</h3>
        )
      })}

      <h2>People:</h2>
      {people.map(person => {
        return (
          <h3>{person.firstName} {person.lastName}</h3>
        )
      })}
    </>
  )
}

export default App
