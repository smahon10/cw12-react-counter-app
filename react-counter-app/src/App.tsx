function App() {
  const count = -5;

  return (
    <div>
      <div className="control">
        <button id="reset">↻</button>
      </div>
      <div id="counter">{count}</div>
      <div className="control">
        <button id="decrement">-</button>
        <button id="increment">+</button>
      </div>
    </div>
  )
}

export default App
