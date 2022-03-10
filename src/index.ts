import * as wasm from "../pkg";

const root = document.getElementById("root") as HTMLDivElement;
root.innerText = wasm.greet();
