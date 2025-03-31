import React from 'react'
import Card from './Card'

const CardList= (props)=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 p- px-10">
            {
                props.robots.map((user,i)=>{
                    return (
                        <Card 
                            key={i}
                            id={props.robots[i].id}
                            name={props.robots[i].name}
                            email={props.robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
