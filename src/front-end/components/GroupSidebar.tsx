import React, { useState } from 'react'
import { GroupSidebarProps } from '../types/types';

const testArray = [{
    id: 0,
    name: 'Squirtle Squad'
  }, {
    id: 1,
    name: 'OSP Group'
  }, {
    id: 2,
    name: 'Roommates'
  }, {
    id: 3,
    name: 'My Deadbeat Friends'
  }];

export default function GroupSidebar({groupSelection, setGroupSelection}: GroupSidebarProps) {

  // function handleClick(el: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   console.log(el);

  function handleClick(el: any) {
    setGroupSelection(parseInt(el.target.id));
  }

  testArray.sort();

  const groupList = testArray.map(group =>
    <li key={group.id} className='hover:bg-gray-600'>
      <button onClick={(el) => handleClick(el)} id={group.id.toString()}>
        {group.name}
      </button>
    </li>
  )

  return (
    <>
      <div className="dark:text-white">
        <h1 className='text-3xl'>Expensieve</h1>
          <ul>
            {groupList}
          </ul>
      </div>

      <button
        id="groupSidebar"
        className="btn btn-large"
        name="submission"
        role="button"
        data-cy="submit"
      >
        Submit
      </button>
    </>
  )
}
