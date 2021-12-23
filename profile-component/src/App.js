import './App.css';

import Profile from './components/profile/profile';

function App() {

  const img_url = 'https://media-exp1.licdn.com/dms/image/C5603AQHjIyD4eJU8cg/profile-displayphoto-shrink_200_200/0/1532974874352?e=1645660800&v=beta&t=ev8qq6NZlBlnUZVqqac0ksILKdTRujmZ-mIQHdGeHBM';

  return (
    <div>
      <div className="App">
          <Profile profileObj={{
            name: {first: 'May', last:'Tusek'}, 
            picture: img_url, 
            titles: [{first: 'Fullstack', last: 'Developer'}, {first: 'Software', last: 'Engineer'}],
            email: 'tusek.may@gmail.com',
            descriptions: [],
          }}
          />
      </div>
      
      <div className='test'>
      </div>
    </div>
  );
}

export default App;
