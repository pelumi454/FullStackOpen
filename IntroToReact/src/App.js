import React from "react";

const App = () => {
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

 return (
   <div>
     {parts.map((d) => {
       return (
         <div>
           <li key={d.exercises}>{d.name}</li>
           <li key={d.exercises}>{d.exercises}</li>
           <li key={d.exercises}>{d.age}</li>
         </div>
       );
     })}
   </div>
 );
}

export default App;
