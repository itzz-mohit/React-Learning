import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let passwordd = " ";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) string += "0123456789";
    if (symbols) string += "~`!@#$%^&*()_-+?/{}[]";

    for (let index = 1; index <= length; index++) {
      let random = Math.floor(Math.random() * string.length + 1);

      passwordd += string.charAt(random);
    }

    setPassword(passwordd);
  }, [length, numbers, symbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, symbols, numbers, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 hover:bg-blue-900 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((allowed) => !allowed);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbols}
              id="characterInput"
              onChange={() => {
                setSymbols((allowed) => !allowed);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
