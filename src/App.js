function Food({ fav }) {
  return <h1>I like { fav }</h1>
}

function App() {
  return (
    <div>
      <h1>Hello, world</h1>
      <Food fav="떡볶이" />
    </div>
  )
}

export default App;
