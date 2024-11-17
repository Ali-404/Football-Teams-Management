import  { FC } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchBar:FC = () => {
  return (
    <div className='border-none shadow rounded-lg px-2  bg-cyan-50 '>
        <Input className=' shadow-none border-none p-0 focus-visible:ring-0' type='search' placeholder='Search' icon={<Search />} />
    </div>
  )
}

export default SearchBar