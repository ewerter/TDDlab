import React from "react";

function Clock() {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    setClock(new Date(), 1000);
  });

  return (
    <div>
      <h2>
        It is {clock.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })}
        .
      </h2>
    </div>
  );
}

export default Clock;
