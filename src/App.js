import React from 'react';


function Food({fav}){
return <h1>I like {fav} </h1>;
}
function App() {
  // return  <div className="App"/>;

  return  (
  <div> 
    <h1>hello</h1>
    <Food fav="김치" />
    <Food fav="떡볶이" />
    <Food fav="치킨" />
    <Food fav="피자" />
  </div>
  );
}

export default App;