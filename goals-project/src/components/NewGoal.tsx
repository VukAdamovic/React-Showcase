import { type FormEvent, useRef } from "react";

type NewGoalProps = {
	onAddGoal: ( goal: string, summary: string ) => void;
}


function NewGoal( { onAddGoal }: NewGoalProps ){
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);
	
	function handleSubmit( event: FormEvent<HTMLFormElement> ){
		event.preventDefault();
		// new FormData(event.currentTarget);
		
		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;
		
		event.currentTarget.reset();
		
		onAddGoal( enteredGoal, enteredSummary );
		
	}
	
	
	return (
		<form onSubmit={ handleSubmit }>
			<p>
				<label htmlFor="goal">Your Goal</label>
				<input id="goal" type="text" name="goal" ref={goal}/>
			</p>
			<p>
				<label htmlFor="summary">Short summary</label>
				<input id="summary" type="text" name="summary" ref={summary}/>
			</p>
			<button>Add Goal</button>
		</form>
	);
}

export default NewGoal;