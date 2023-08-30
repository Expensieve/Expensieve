import React, { useState } from 'react'

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

export default function GroupSidebar({groupSelection, setGroupSelection}) {

  function handleClick(group: { id: number; name: string }) {
    setGroupSelection(group.name)
  }

  testArray.sort();

  const groupList = testArray.map(group =>
    <li key={group.id}>
      <button onClick={handleClick}>
        {group.name}
      </button>
    </li>
  )

  return (
    <>
      <div>
        <h1>Expensieve</h1>
          <ul>
            {groupList}
          </ul>
      </div>

      <button
        id="main"
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
