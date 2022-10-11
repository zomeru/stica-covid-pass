interface DashboardProps {
  handleLogout: () => void;
}

const Dashboard = ({ handleLogout }: DashboardProps) => {
  const users = [
    {
      id: 1,
      fullName: 'Zomer Gregorio',
      username: 'zomerusama',
      email: 'hello@zomeru.com',
    },
    {
      id: 2,
      fullName: 'Maureen Despabiladeras',
      username: 'mauxiii',
      email: 'maureen@gmail.com',
    },
    {
      id: 3,
      fullName: 'Mark Joseph Yoldi',
      username: 'marky',
      email: 'markyoldi@gmail.com',
    },
    {
      id: 4,
      fullName: 'Vince Hector Castillo',
      username: 'vincehector',
      email: 'vince@gmail.com',
    },
    {
      id: 5,
      fullName: 'Lourence Jacaba',
      username: 'lourence',
      email: 'lourence@gmail.com',
    },
    {
      id: 6,
      fullName: 'Joshua Pamisa',
      username: 'joshpamisa',
      email: 'josh@gmail.com',
    },
  ];

  return (
    <div
      className={`w-screen h-screen p-10 duration-300 transition-all space-y-4`}
    >
      <div className='flex justify-between'>
        <div className='text-3xl font-semibold text-primary'>Users</div>
        <button onClick={handleLogout}>Log out</button>
      </div>

      <table className='min-w-full leading-normal overflow-y-scroll'>
        <thead>
          <tr>
            <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>
              Full Name
            </th>
            <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>
              Username
            </th>
            <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>
              Email
            </th>

            {
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3' />
            }
            {/* <th className='border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>
              Author
            </th> */}
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr>
              <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                <p className='whitespace-no-wrap text-gray-900'>
                  {user.fullName}
                </p>
              </td>
              <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                <p className='whitespace-no-wrap text-gray-900'>
                  {user.username}
                </p>
              </td>
              <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                <p className='whitespace-no-wrap text-gray-900'>{user.email}</p>
              </td>
              <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                <div className='flex space-x-4'>
                  <button
                    // onClick={onEdit}
                    type='button'
                    className='text-blue-600 font-medium'
                  >
                    Reset Password
                  </button>
                </div>
                {/* <p className='whitespace-no-wrap text-gray-900'>asd</p> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
