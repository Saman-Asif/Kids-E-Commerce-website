import React from 'react'
import { Search as SearchIcon } from 'lucide-react'

const Search = ({searchQuery, setSearchQuery}) => {
  return (
    <>
      <div className="md:w-[45%] w-full pt-6">
      {/* HTML Form Structure styled with Tailwind CSS */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-gray-400 pl-4">
         <SearchIcon size={18}/>
         </div>
        <input
          type="text"
          placeholder="Search for your next creative project..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 text-gray-700 pl-10 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e6c7bf] text-sm focus:border-transparent transition-all shadow-sm"
        />
      </div>
      </div>
    </>
  )
}

export default Search
