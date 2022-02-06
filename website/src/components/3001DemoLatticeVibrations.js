import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gvarnavi/lattice-vibrations-lj";

function LatticeVibrationsLj() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/@gvarnavi/lattice-vibrations-lj">Lattice Vibrations - 3.001 Demo by Georgios Varnavides</a></p>
    </>
  );
}

export default LatticeVibrationsLj;
