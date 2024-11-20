import  { FC } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchBar:FC<{className?: string, placeholder?: string}> = ({className, placeholder}) => {
  return (
    <div className={'border-none shadow rounded-2xl px-2  bg-cyan-50 ' + className}>
        <Input className=' shadow-none border-none p-0 focus-visible:ring-0' type='search' placeholder={placeholder ?? 'Search'} icon={<Search />} />
    </div>
  )
}

export default SearchBar
