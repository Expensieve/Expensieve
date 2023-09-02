import React from "react";
import TransactionHistory from "./transactionHistory";
import Chat from "./chat";
import UserList from "./userList";

const data = {
  serviceName: 'Netflix',
  serviceURL: 'https://www.netflix.com',
  serviceDescription: 'Netflix is a widely popular streaming platform offering a vast library of movies, TV shows, and documentaries. Subscribers can access content anytime, anywhere, on various devices. With a diverse range of genres and original productions, Netflix has transformed how people consume entertainment, becoming a global leader in streaming services.',
  serviceUsername: 'username@domain.com',
  servicePassword: 'password',
  serviceOwner: 'lucascontreras',

  userIsMember: false,
  userIsOwner: true,
}

type serviceDashboardProps = {
  serviceData: {
    cost: number,
    description: string,
    id: number,
    name: string,
    owner: number,
    password: string,
    url: string,
  },
}

const ServiceDashboard = ({serviceData}: serviceDashboardProps) => {
  return (
    <div className="border-red-600 border-2">
      <div className="text-center">
        <h1 className="text-3xl dark:text-white">
          {data.serviceName}
        </h1>
        <h1
          className="text-xs font-mono italic dark:text-white"
        >
          owned by&nbsp;
          <span
            className="text-sky-400"
          >
            {data.serviceOwner}
          </span>
        </h1>
        <div
          className="flex justify-center"
        >
          {/* owner can delete service */}
          {data.userIsOwner &&
            <div
              className="text-red-500 border-2 border-red-500 rounded-full p-2 my-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          }
          {/* member can opt-out from service */}
          {data.userIsMember &&
            <div
              className="text-yellow-500 border-2 border-yellow-500 rounded-full p-2 my-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          }
          {/* non-member can opt-in to service */}
          {!data.userIsOwner && !data.userIsMember &&
            <div
              className="text-green-500 border-2 border-green-500 rounded-full p-2 my-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          }
        </div>
        <div className="flex justify-center">
          <div className="flex hover:underline rounded-full bg-sky-400 px-3 text-black">
            <div
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-black mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div
              className="cursor-pointer"
            >
              <a
                href={data.serviceURL}
                target="_blank"
              >
                {data.serviceURL}
              </a>
            </div>
          </div>
        </div>
        <h1 className="font-mono text-xs py-2 dark:text-white">
          {data.serviceDescription}
        </h1>
        </div>
      <div className="flex">
        <h1 className="flex-auto text-center dark:text-white">
          {data.serviceUsername}
        </h1>
        <button className="dark:text-white">
          Copy
        </button>
        <h1 className="flex-auto text-center dark:text-white">
          {data.servicePassword}
        </h1>
      </div>
      <div className="flex">
        <div className="flex-auto">
          <TransactionHistory /> 
        </div>
        <div className="flex-auto">
          <Chat />
        </div>
        <div className="flex-auto">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
