import { type ReactNode } from "react";

type CourseGoalProps = {
	id: number;
	title: string;
	children: ReactNode;
	onDeleteGoal: (id: number) => void;
}

function CourseGoal( { id, title, children, onDeleteGoal }: CourseGoalProps ){
	return (
		<article>
			<div>
				<h2>{ title }</h2>
				{ children }
			</div>
			<button onClick={() => onDeleteGoal(id)}>Delete</button>
		</article>
	);
}

export default CourseGoal;