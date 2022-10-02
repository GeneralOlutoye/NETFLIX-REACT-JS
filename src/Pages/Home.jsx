import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

export const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestsPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}