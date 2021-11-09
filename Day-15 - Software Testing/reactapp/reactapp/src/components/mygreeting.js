  import React from "react";

  function Greeting(props) {
    return <h1>Welcome, {props.fn} {props.ln}</h1>;
  }

  
  function Getgreet() {
    return (
      <div>
        <Greeting fn="Bob" ln="Marley" />
        <Greeting fn="Rod" ln="Stewart"/>
        <Greeting fn="John" ln="Dener"/>
      </div>
    );
  }

  
  export default Getgreet;