import React from 'react'

const SearchBox = () => {
//   return (
//     <div className='flex'>
//         <div className='flex-grow position-fixed bg-blue-600 bg-opacity-20 w-96 h-24'></div>
//        <div className='search-box bg-white mt-7 mr-3 p-1 h-10 rounded-full flex'>
//         <input
//           type="search"
//           id="default-search"
//           className="block w-full h-8 p-2 g-lg-5 ps-9 text-sm rounded-full bg-gray-100 relative outline-none"
//           placeholder="Search..."
//           required
//         />
//         <button className='absolute right-56 top-11 mr-14'>
//           <svg
//             className="search-icon w-4 h-3 text-gray-500"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </button>
//         <button className='bell-icon ml-3 mr-4 w-2'>
//           <svg className="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
//           </svg>
//         </button>
//         <button
//           type="submit"
//           className="text-white bg-blue-900 focus:ring-4 font-medium rounded-full text-sm px-3 py-2 ml-2">AP
//         </button>
//       </div>

//     </div>
//   )
  return (
    <header className="fixed ml-64 top-7 w-full p-4 bg-opacity-20 backdrop-blur-lg bg-blue-100 h-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" font-bold text-xl text-indigo-700">Your Logo</div>
         
        </div>
      </div>
    </header>
  );
}

export default SearchBox