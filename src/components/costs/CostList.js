import CostItem from "./CostItem";
import React from "react";
import "./CostList.css"
const CostList=(props)=> {
    if (props.cost.length === 0) {
        return <h2 className="cost-list__fallback">Empty in this year</h2>
    }
    return <ul className="cost-list">
        { props.cost.map((cost) => (
        <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}/>
        ))}
    </ul>
}
export default CostList