import React, { useState } from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.scss'
import "@fontsource/raleway"

import CurrJSONIt from './pages/Curriculum/CurriculumIT.json'
import CurrJSON from './pages/Curriculum/Curriculum.json'
import ActJSON from './pages/Activities/Activities.json'
import ActJSONIt from './pages/Activities/ActivitiesIT.json'
import PubJSON from './pages/Publications/Publications.json'
import PubJSONIt from './pages/Publications/PublicationsIT.json'
import HomePageJSON from './pages/HomePage/HomePage.json'
import HomePageJSONIt from './pages/HomePage/HomePageIT.json'
import TitleJSON from './components/Title.json'
import TitleJSONIt from './components/TitleIT.json'

// http://riccardorosati.eu/

function App() {

  const [homepage, changeHomePage] = useState(HomePageJSON)

  const [curriculum, changeCurr] = useState(CurrJSON)

  const [publication, changePub] = useState(PubJSON)
  const allPubEn = publication.map((pub) => <p>{pub}</p>) 

  const [activity, changeActivity] = useState(ActJSON)

  const [title, changeTitle] = useState (TitleJSON)

  const [lang, changeTxt] = useState("ita")

  function changeToIta() {
    if (lang === "ita") {
      changeCurr(CurrJSONIt)
      changeActivity(ActJSONIt)
      changePub(PubJSONIt)
      changeHomePage(HomePageJSONIt)
      changeTitle(TitleJSONIt)
    } else {
      changeCurr(CurrJSON)
      changeActivity(ActJSON)
      changePub(PubJSON)
      changeHomePage(HomePageJSON)
      changeTitle(TitleJSON)
    }
  }

  function changeLang() {
    changeToIta()
    if (lang === "eng") {
      changeTxt("ita")
    } else {
      changeTxt("eng")
    }
  }

  
  return (
    <div className='containerApp'>
      <Header title={title} lang={lang} changeLang={changeLang} />
        <Home allPubEn={allPubEn} curriculum={curriculum} activity={activity} homepage={homepage} title={title} changeLang={changeLang} lang={lang} />
      <Footer />
    </div>
  )
}

export default App;