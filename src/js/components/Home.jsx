import React from "react";
import ToDoList from "./ToDoList";


//create your first component
const Home = () => {
	return (
		<div className="container mt-4">
			<ToDoList/>
		</div>
	);
};

export default Home;