import React from "react";
import InputItem from "../courseItem/InputItem";
import './CourseGoalList.css';

const CourseGoalList=props => {
        return (
          <ul className="goal-list">
            {props.items.map(goal => (
              <InputItem

                key={goal.id}
                id={goal.id}
                onDelete={props.onDeleteItem}
              >
                {goal.text}
              </InputItem>
            ))}
          </ul>
        );
      };
export default CourseGoalList;