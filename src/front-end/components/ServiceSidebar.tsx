import React, { useState } from 'react'
import { GroupSidebarProps, ServiceSidebarProps } from '../types/types';

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

export default function ServiceSidebar({ groupSelection, setGroupSelection, serviceSelection, setServiceSelection }: ServiceSidebarProps) {
  testArray.sort();

  console.log(serviceSelection);

  const servicesList = testArray.map(serviceName =>
    <li key={serviceName.id} className='hover:bg-gray-600'>
      {serviceName.name}
    </li>
  )

  if (groupSelection != "") {
    return (
      <>
        <div className="dark:text-white">
        <h1>
          <ul>
            {servicesList}
          </ul>
        </h1>
        </div>

        <button
          id="serviceSidebar"
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
  return null;
}
