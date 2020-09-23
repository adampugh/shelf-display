import React, { Component } from 'react';

import Shelf from './shelf';

// figures
import spawngunslinger from '../images/figures/spawngunslinger.png'
import spawn from '../images/figures/spawn.png'

import apoc from '../images/figures/apoc.png'
import dbeast from '../images/figures/dbeast.png'
import ms from '../images/figures/ms.png'
import stryfe from '../images/figures/stryfe.png'

import wolverine from '../images/figures/wolverine.png'
import cyclops from '../images/figures/cyclops.png'
import cable from '../images/figures/cable.png'
import xman from '../images/figures/xman.png'

import moonknight from '../images/figures/moonknight.png'
import spiderman2099 from '../images/figures/spiderman2099.png'
import blackspidey from '../images/figures/blackspidey.png'
import deadpool from '../images/figures/deadpool.png'


// comics
// mr sininster
import sFirstApp from '../images/comics/xmen221.jpg'
import s1 from '../images/comics/cable6.jpg'
import s2 from '../images/comics/xfactor105.jpg'
import s3 from '../images/comics/xmen239.jpg'
import s4 from '../images/comics/xmenadventures6.jpg'

// dark beast
import dbFirstApp from '../images/comics/xmenalpha1.jpg'
import db1 from '../images/comics/xmenunlimited10.jpg'
import db2 from '../images/comics/xman9.jpg'

// apoc
import aFirstApp from '../images/comics/xfactor6.jpg'
import a1 from '../images/comics/xmenomega1.jpg'

// stryfe
import stFirstApp from '../images/comics/newmutants87.jpg'
import st1 from '../images/comics/stryfesstrikefile.jpg'
import st2 from '../images/comics/xmen296.jpg'

// wolverine
import w1 from '../images/comics/hulk340.jpg'

// cyclops 
import c1 from '../images/comics/xmen1.jpg'

// cable

// xman 
import xman1 from '../images/comics/xman1.jpg'


// spiderman 2099
import sp1 from '../images/comics/spiderman20991.jpg'

// moon knight
import mk1 from '../images/comics/moonknight1.jpg'
import mk2 from '../images/comics/moonknight1var.jpg'

// black spidey
import bsp1 from '../images/comics/secretwars8.jpg'

// deadpool
import d1 from '../images/comics/newmutants98.jpg'

// spawn
import spawn1 from '../images/comics/spawn1.jpg'
import spawn2 from '../images/comics/spawn174.jpg'
import spawn3 from '../images/comics/spawn175.jpg'
import spawn4 from '../images/comics/spawn306d.jpg'
import spawn5 from '../images/comics/spawn309d.jpg'

const displays = [
    // xmen
    { character: 'Apocalypse', comic: a1, figure: apoc, firstApp: aFirstApp },
    { character: 'Mister Sinister', comic: s1, figure: ms, firstApp: sFirstApp },
    { character: 'Stryfe', comic: st2, figure: stryfe, firstApp: stFirstApp },
    { character: 'Dark Beast', comic: dbFirstApp, figure: dbeast, firstApp: dbFirstApp },
    { character: 'Cable', comic: stFirstApp, figure: cable, firstApp: stFirstApp },
    { character: 'X-Man', comic: xman1, figure: xman, firstApp: null },
    { character: 'Wolverine', comic: w1, figure: wolverine, firstApp: null },
    { character: 'Cyclops', comic: c1, figure: cyclops, firstApp: null },
    
    // marvel
    { character: 'Spider-Man 2099', comic: sp1, figure: spiderman2099, firstApp: null },
    { character: 'Moon Knight', comic: mk1, figure: moonknight, firstApp: null },
    { character: 'Symbiote Spider-Man', comic: bsp1, figure: blackspidey, firstApp: null },
    { character: 'Deadpool', comic: d1, figure: deadpool, firstApp: null },
    // cosmic ghost rider

    // spawn
    { character: 'Spawn', comic: spawn1, figure: spawn, firstApp: spawn1 },
    { character: 'Spawn Gunslinger', comic: spawn2, figure: spawngunslinger, firstApp: spawn4 },
    { character: '', comic: spawn4, figure: null, firstApp: null },
    { character: '', comic: spawn5, figure: null, firstApp: null },
]

class Shelves extends Component {
    state = {
        firstAppSelected: false
    }

    firstAppClick = () => {
        this.setState(prevState => ({
            firstAppSelected: !prevState.firstAppSelected
        }))
    }

    render() {
        return (
            <>
                <button onClick={this.firstAppClick}>First App</button>
                <div className="shelves">
                    { displays.map(({ comic, figure, firstApp }) => <Shelf figure={figure} comic={this.state.firstAppSelected ? firstApp : comic} />) }
                </div>
            </>
        )
    }
}

export default Shelves