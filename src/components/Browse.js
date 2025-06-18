import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usPopularMovies'
import ContainerMain from './ContainerMain'
import ContainerSecondary from './ContainerSecondary'
import GPTSearch from './GPTSearch'
import Header from './Header'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <ContainerMain />
          <ContainerSecondary />
        </>
      )}
    </div>
  )
}

export default Browse
