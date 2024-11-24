import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
	goals: CGoal[];
	onDeleteGoal: ( id: number ) => void;
}

function CourseGoalList( { goals, onDeleteGoal }: CourseGoalListProps ){
	
	if( goals.length === 0 ){
		return (
			<InfoBox mode="hint">
				<p>No goals found. Maybe add one?</p>
			</InfoBox>
		);
	}
	
	
	let warningBox: ReactNode;
	
	if ( goals.length >= 4){
		warningBox = (
			<InfoBox mode="warning" severity="medium">
				<p>There are too many goals. Don't put too much on your plate.</p>
			</InfoBox>
		);
	}
	
	return (
		<>
			{ warningBox }
			<ul>
				{
					goals.map( goal => {
						return (
							<li key={ goal.id }>
								<CourseGoal title={ goal.title } onDeleteGoal={ onDeleteGoal } id={ goal.id }>
									<p>{ goal.description }</p>
								</CourseGoal>
							</li>
						);
					} )
				}
			</ul>
		
		</>
	);
}

export default CourseGoalList;