import React from "react";
function MainGreets() {
  const firstName = "mary";
  const lastName = "jane";

  return (
    <div>
      <h1>Hello {firstName + " " + lastName}</h1>
      <h1>Hello{`${firstName} ${lastName}`}</h1>
      <h1>This is main, Hello CodeSandbox</h1>;
    </div>
  );
}

export default MainGreets;
