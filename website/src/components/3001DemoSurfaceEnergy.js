import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gvarnavi/surfarce-energy-lj";

function SurfarceEnergyLj() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/@gvarnavi/surfarce-energy-lj">Surface Energy - 3.001 Demo by Georgios Varnavides</a></p>
    </>
  );
}

export default SurfarceEnergyLj;
