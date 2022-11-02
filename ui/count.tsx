import React from "react";

function Count() {
	const [count, setCount] = React.useState(0);

	function request() {
		fetch("https://catfact.ninja/fact")
			.then((response) => response.json())
			.then((data) => {
				console.log(data.fact);
			});
	}

	return (
		<div className="flex flex-row">
			<button className="p-1 m-1 border border-blue-700 bg-blue-500 text-black rounded-md" onClick={() => setCount(count+1)}> Press Me! </button>
			<p>Count: {count}</p>
			<button className="p-1 m-1 border border-blue-700 bg-blue-500 text-black rounded-md" onClick={() => request()}> Fetch </button>
		</div>
	)
}

export default Count;