import React, { useState } from 'react'

const testArray = [{
    id: 0,
    name: '❌ Notflix'
  }, {
    id: 1,
    name: '🤷‍♀️ Wholoo?'
  }, {
    id: 2,
    name: '🐑 BleetCode Premium'
  }, {
    id: 3,
    name: '🦙 Llamazon Web Services'
  }]

export default function ServiceSidebar({serviceSelection, setServiceSelection}) {
  testArray.sort();

  const servicesList = testArray.map(serviceName =>
    <li key={serviceName.id}>
      {serviceName.name}
    </li>
  )

  return (
    <>
    <div>
      <h1>
        <ul>
          {servicesList}
        </ul>
      </h1>
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
