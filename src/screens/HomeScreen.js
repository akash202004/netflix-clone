import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'


const HomeScreen = () => {

    return (
        <div className='homeScreen' data-scroll-section>
            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Hoeeor Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
            <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
            <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
            <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
            <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
            <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />

        </div>
    )
}

export default HomeScreen