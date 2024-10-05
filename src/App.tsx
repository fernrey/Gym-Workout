import { useState } from 'react'
import Hero from './Components/Hero'
import Generator from './Components/Generator'
import Workout from './Components/Workout'



function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscle, setMuscle] = useState([{}]);
  const [goals, setGoals] = useState('strength_power');
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscle={muscle}
        setMuscle={setMuscle}
        goals={goals}
        setGoals={setGoals}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
