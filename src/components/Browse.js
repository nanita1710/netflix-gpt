import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usPopularMovies'
import ContainerMain from './ContainerMain'
import ContainerSecondary from './ContainerSecondary'
import Header from './Header'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      <ContainerMain />
      <ContainerSecondary />
    </div>
  )
}

export default Browse
