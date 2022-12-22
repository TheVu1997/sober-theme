import React from 'react'
import IntroBot from './IntroBot/IntroBot'
import IntroTop from './IntroTop/IntroTop'

function Intro() {
    return (
        <div id='intro'>
            <IntroTop/>
            <IntroBot/>
        </div>
    )
}

export default Intro