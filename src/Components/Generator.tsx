import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Button from './Button';


function Header(props: any) {
  const { index, title, description } = props;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

function Generator(props : any) {

  const{muscle, setMuscle, poison, setPoison, goals, setGoals} = props;

  const [showModal, setshowModal] = useState(false);
  
  function toggleModal() {
    setshowModal(!showModal);
  }

  function updateMuscles(muscleGroup: string) { //function to show current muscles being chose on "lock on target"

    if (muscle.includes(muscleGroup)) { /// return logic
      setMuscle(muscle.filter(val => val !== muscleGroup))
      return
    }

    if (muscle.length > 2) { // allows the user to select up to 3 muscle groups
      return
    }
    if (poison !== 'individual') { //this would allow the logic to choose only on individual card. Only 'individual would allow up to 3 items
      setMuscle([muscleGroup]);
      setshowModal(false); // will make the slider close once a muscle group is chosen
      return
    }

    setMuscle([...muscle, muscleGroup])

    if (muscle.length === 2) { // logic to make 'individual slider close once 3 are chosen
      setshowModal(false);
    }
  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'Clock']}>
      <Header index={'01'} title={'Pick Your Poison'} description={"Select the workout you with to endure"} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscle([]); //resets usestate once a new category is chosen
                setPoison(type);
              }}
              className={'bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? 'border-blue-600' : 'border-blue-400')}
              key={typeIndex}
            >
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Lock On Target'} description={"Select the muscles"} />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p className='capitalize'>
            {muscle.length === 0 ? 'Select Muscle Groups' : muscle.join(' ')}
          </p>
          <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2  fa-caret-down'></i>
        </button>
        {showModal && (
          <div className='flex flex-col p-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison as keyof typeof WORKOUTS])).map((muscleGroup, musclegroupIndex) => {
              return (
                <button onClick={() => {
                  updateMuscles(muscleGroup)
                }} key={musclegroupIndex}
                  className={'hover:text-blue-400 duration-200 ' + (muscle.includes(muscleGroup) ? 'text-blue-400' : ' ')}
                >
                  <p className='uppercase'>
                    {muscleGroup.replaceAll('_', " ")}
                  </p>
                </button>
              )
            })}
          </div>
        )}
      </div>
      <Header index={'03'} title={'Become a Juggernaut'} description={"Select your objective"} />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoals(scheme)
            }}
              className={'bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (scheme === goals ? 'border-blue-600 ' : ' border-blue-400 ')}
              key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Button text={"Generate"}></Button>
    </SectionWrapper>
  )
}

export default Generator
