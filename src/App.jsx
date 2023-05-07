import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App () {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:09:56.428Z',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:22:43.665Z',
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Abadango',
      location: 'Abadango',
      created: '2017-11-04T19:50:28.250Z',
    },
    {
      id: 13,
      name: 'Alien Googah',
      status: 'Dead',
      species: 'Alien',
      gender: 'Male',
      origin: 'unknown',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T20:33:30.779Z',
    },
  ];
  const randomNumber = (max) =>{
    return Math.floor(Math.random() * max);
  }
  const chooseCharacter = () => {
    const num =  randomNumber(characters.length)
    return characters[num];
  }
  const character = chooseCharacter();
  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  return (
    <div className='site-container'>
      <Header title='Tema 05' subtitle='Práctica 01' />
      <main>
        <Card character = {character}/>
      </main>
      <Footer year={year}/>
    </div>
  )
}

export default App;
