import React from "react";

export const Table = ({ data, handleDelete, handleEdit }) => {
  return (
    <div className="overflow-x-auto relative table-fixed">
      <p>{`Total data: ${data.length}`}</p>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 w-24">
              User Id
            </th>

            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Body
            </th>
            <th scope="col" className="py-3 px-6 w-80">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                key={i}
                className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-500"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.userId}
                </th>
                <td className="py-4 px-6">{item.title}</td>
                <td className="py-4 px-6">{item.body}</td>

                <td className="py-4 px-6 flex gap-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="w-full text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="w-full focus:outline-none text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
