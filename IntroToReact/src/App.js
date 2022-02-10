import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
      age: "34",
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      age: "34",
    },
    {
      name: "State of a component",
      exercises: 14,
      age: "34",
    },
  ];

 return (
   <div>
     <Header course={course} />
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
