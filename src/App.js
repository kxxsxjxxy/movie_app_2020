import React from 'react';
import imgA from './images/kimchi.jpeg';
import imgB from './images/ramen.jpeg';
import imgC from './images/chicken.jpeg';
import imgD from './images/pizza.jpg';

function Food ({name, image, altText}) {
  return (
    <div>
    <h2>I Love{name}</h2>
    <img src={image} alt={altText} />
    </div>
    );
  }


const foodILike = [
  {
    id: 1,
    name : '김치',
    image : imgA,
    altText : '김치를 먹는 모습'
  },
  {
    id: 2,
    name : '라면',
    image : imgB,
    altText: '라면을 먹는 모습'
  },
  {
    id: 3,
    name : '치킨',
    image : imgC,
    altText: '치킨을 먹는 모습'
  },
  {
    id: 4,
    name : '피자',
    image : imgD,
    altText: '피자를 먹는 모습'
  },

];

function App() {
  return  (
  <div> 
        {foodILike.map(dish =>(<Food key={dish.id} name={dish.name} image={dish.image} altText={dish.altText} />))}
    </div>
  );
}

export default App;  
