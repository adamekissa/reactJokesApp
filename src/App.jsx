import { useState } from 'react'
import './App.css'
import JokeCard from './JokeCard.jsx'

function App() {
  const jokeList = [{title:"Star wars Theme" , joke: "How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side."},
    {title: "Meditation", joke: "What do you call a dog who meditates? Aware wolf."},
    {title: "Breakfast theme", joke: "Why did the egg have a day off? Because it was Fryday."},
    {title: "Grape wine", joke: "What did the grape say when it got stepped on? Nothing, just a little wine."},
    {title: "French", joke:"What do you call a French man wearing sandals? Philipe Fallop."},
    {title: "Handy-Man", joke:"I gave my handyman a to-do list, but he only did jobs 1, 3, and 5. Turns out he only does odd jobs."},
    {title: "Rainbow", joke:"Where do rainbows go when they've been bad? To prism, so they have time to reflect on what they've done."},
    {title: "Grocer", joke:"Why couldn't the produce manager make it to work? He could drive, but he didn't avocado."}
];

  return (
    <>
      <h2>Welcome to the Dad Jokes Zone</h2>

<div className="row">

  {jokeList.map(element =>  {
    return(<JokeCard 
      title={element.title}
      joke={element.joke}
      />)
  })}
  
</div>
    </>
  )
}

export default App
