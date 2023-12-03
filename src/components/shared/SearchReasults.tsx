import { Models } from 'appwrite';
import { type } from 'os'
import { GridPostList, Loader } from '.';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchReasults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
  if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents}/>

   
  )
}

return ( 
  <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
)
}


export default SearchResults;