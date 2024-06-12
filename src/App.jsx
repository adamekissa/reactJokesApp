import { useState } from 'react'
import './App.css'
import JokeCard from './JokeCard.jsx'

function App() {

  return (
    <>
      <h2>Welcome to the Dad Jokes Zone</h2>

<div className="row">
  <JokeCard 
  title="Star wars Theme"
  joke="How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side."
  />
  <JokeCard 
  title="Meditation"
  joke="What do you call a dog who meditates? Aware wolf."
  />
  <JokeCard
  title="Breakfast theme"
  joke="Why did the egg have a day off? Because it was Fryday."
  />
  <JokeCard
  title="Grape wine"
  joke="What did the grape say when it got stepped on? Nothing, just a little wine."
   />
  
</div>
    </>
  )
}

export default App
