import React from "react";
import { useContainer } from 'unstated-next'
import { User } from '@/store'

function Home(props) {
  const { user, setUser } = useContainer(User)
  return (
    <User.Provider>
      <>
        home <div>{user?.name}</div>
        <button onClick={() => setUser({ name: 'day', id: 12138 })}>set name</button>
      </>
    </User.Provider>
  )
}

export default Home;
