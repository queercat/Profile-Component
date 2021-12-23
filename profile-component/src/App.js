import './App.css';

import Profile from './components/profile/profile';
import Next from './components/next/next';

import {VoxelTemplate} from './components/voxel/Voxel';
import {useState, useEffect} from 'react'

function App() {

  const img_url = 'https://media-exp1.licdn.com/dms/image/C5603AQHjIyD4eJU8cg/profile-displayphoto-shrink_200_200/0/1532974874352?e=1645660800&v=beta&t=ev8qq6NZlBlnUZVqqac0ksILKdTRujmZ-mIQHdGeHBM';
  const [appState, setAppState] = useState(0);

  useEffect(() => {
    
  }, [appState])

  return (
      <div className="App">
          {/* <Next state={appState} setState={setAppState}/> */}

          {appState == 0 &&
              <Profile profileObj={{
                name: {first: 'May', last:'Tusek'}, 
                picture: img_url, 
                titles: [{first: 'Fullstack', last: 'Developer'}, {first: 'Software', last: 'Engineer'}],
                email: 'tusek.may@gmail.com'
              }}>
                <div className='center'>
                  <VoxelTemplate baseURL="/models/computer-cute" color="#f5f5f5" width=".2" height=".25" rot={[0, 45, 0]} trans={[0, -.6, 0]} animRot={[0, 0.01, 0]}/>
                </div>
              </Profile>
          }

          {/* {appState == 1 &&
              <Profile aboutObj={{}}>
              </Profile>
          }

          {appState == 2 &&
              <Profile profileObj={{
                name: {first: 'May', last:'Tusek'}, 
                picture: img_url, 
                titles: [{first: 'Fullstack', last: 'Developer'}, {first: 'Software', last: 'Engineer'}],
                email: 'tusek.may@gmail.com'
              }}>
                <div className='center'>
                  <h1>Hello World!</h1>
                </div>
              </Profile>
          } */}
      </div>
  );
}

export default App;
