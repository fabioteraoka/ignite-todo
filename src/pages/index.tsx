import type { NextPage } from 'next'
import Header from '../components/Header'
import List from '../components/List'
import Task from '../components/Task'


const Home: NextPage = () => {
  return (
   <div>
    <Header/>
    <Task/>
   </div>
  )
}

export default Home
