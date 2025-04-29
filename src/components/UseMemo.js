import React, { useMemo } from "react";

function UseMemo() {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating expensive value...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 1;
    }
    return total;
  }, []);

  return (
    <section className="expensive-section">
      <h3>Expensive Calculation</h3>
      <div className="expensive-output">{expensiveCalculation}</div>
    </section>
  );
}

export default UseMemo;