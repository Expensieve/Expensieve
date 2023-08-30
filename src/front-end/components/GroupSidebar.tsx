import React from 'react'

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
  }]

export default function groupsSidebar() {
  testArray.sort();

  const groupList = testArray.map(groupName =>
    <li key={groupName.id}>
      {groupName.name}
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
