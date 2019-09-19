import React, { Component } from 'react';
import Select from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from "react-transition-group";

const heroClassOptions = [
  { name: 'tank', src: '/img/tank-icon.png' },
  { name: 'support', src: '/img/support-icon.png' },
  { name: 'attack', src: '/img/attack-icon.png' },
];

const supportHeroes = [
  { name: "Zenyatta", listSrc: "/img/heroes/zenyatta.png", bgSrc: "/img/hero-bg/zenyatta.png", portraitSrc: "/img/selected-heroes/zenyatta.png" },
  { name: "Lucio", listSrc: "/img/heroes/lucio.png", bgSrc: "/img/hero-bg/lucio.png", portraitSrc: "/img/selected-heroes/lucio.png" },
  { name: "Ana", listSrc: "/img/heroes/ana.png", bgSrc: "/img/hero-bg/ana.png", portraitSrc: "/img/selected-heroes/ana.png" },
  { name: "Mercy", listSrc: "/img/heroes/mercy.png", bgSrc: "/img/hero-bg/mercy.png", portraitSrc: "/img/selected-heroes/mercy.png" },
  { name: "Baptiste", listSrc: "/img/heroes/baptiste.png", bgSrc: "/img/hero-bg/baptiste.png", portraitSrc: "/img/selected-heroes/baptiste.png" },
  { name: "Moira", listSrc: "/img/heroes/moira.png", bgSrc: "/img/hero-bg/moira.png", portraitSrc: "/img/selected-heroes/moira.png" },
  { name: "Brigitte", listSrc: "/img/heroes/brigitte.png", bgSrc: "/img/hero-bg/brigitte.png", portraitSrc: "/img/selected-heroes/brigitte.png" },
];

const attackHeroes = [
  { name: "Ashe", listSrc: "/img/heroes/ashe.png", bgSrc: "/img/hero-bg/ashe.png", portraitSrc: "/img/selected-heroes/ashe.png" },
  { name: "McCree", listSrc: "/img/heroes/mccree.png", bgSrc: "/img/hero-bg/mccree.png", portraitSrc: "/img/selected-heroes/mccree.png" },
  { name: "Pharah", listSrc: "/img/heroes/pharah.png", bgSrc: "/img/hero-bg/pharah.png", portraitSrc: "/img/selected-heroes/pharah.png" },
  { name: "Soldier 76", listSrc: "/img/heroes/soldier-76.png", bgSrc: "/img/hero-bg/soldier-76.png", portraitSrc: "/img/selected-heroes/soldier-76.png" },
  { name: "Genji", listSrc: "/img/heroes/genji.png", bgSrc: "/img/hero-bg/genji.png", portraitSrc: "/img/selected-heroes/genji.png" },
  { name: "Reaper", listSrc: "/img/heroes/reaper.png", bgSrc: "/img/hero-bg/reaper.png", portraitSrc: "/img/selected-heroes/reaper.png" },
  { name: "Hanzo", listSrc: "/img/heroes/hanzo.png", bgSrc: "/img/hero-bg/hanzo.png", portraitSrc: "/img/selected-heroes/hanzo.png" },
  { name: "Mei", listSrc: "/img/heroes/mei.png", bgSrc: "/img/hero-bg/mei.png", portraitSrc: "/img/selected-heroes/mei.png" },
  { name: "Bastion", listSrc: "/img/heroes/bastion.png", bgSrc: "/img/hero-bg/bastion.png", portraitSrc: "/img/selected-heroes/bastion.png" },
  { name: "Junkrat", listSrc: "/img/heroes/junkrat.png", bgSrc: "/img/hero-bg/junkrat.png", portraitSrc: "/img/selected-heroes/junkrat.png" },
  { name: "Doomfist", listSrc: "/img/heroes/doomfist.png", bgSrc: "/img/hero-bg/doomfist.png", portraitSrc: "/img/selected-heroes/doomfist.png" },
  { name: "Sombra", listSrc: "/img/heroes/sombra.png", bgSrc: "/img/hero-bg/sombra.png", portraitSrc: "/img/selected-heroes/sombra.png" },
  { name: "Symmetra", listSrc: "/img/heroes/symmetra.png", bgSrc: "/img/hero-bg/symmetra.png", portraitSrc: "/img/selected-heroes/symmetra.png" },
  { name: "Torbjorn", listSrc: "/img/heroes/torbjorn.png", bgSrc: "/img/hero-bg/torbjorn.png", portraitSrc: "/img/selected-heroes/torbjorn.png" },
  { name: "Widowmaker", listSrc: "/img/heroes/widowmaker.png", bgSrc: "/img/hero-bg/widowmaker.png", portraitSrc: "/img/selected-heroes/widowmaker.png" },
  { name: "Tracer", listSrc: "/img/heroes/tracer.png", bgSrc: "/img/hero-bg/tracer.png", portraitSrc: "/img/selected-heroes/tracer.png" }
]

const tankHeroes = [
  { name: "Winston", listSrc: "/img/heroes/winston.png", bgSrc: "/img/hero-bg/winston.png", portraitSrc: "/img/selected-heroes/winston.png" },
  { name: "D.Va", listSrc: "/img/heroes/dva.png", bgSrc: "/img/hero-bg/dva.png", portraitSrc: "/img/selected-heroes/dva.png" },
  { name: "Reinhardt", listSrc: "/img/heroes/reinhardt.png", bgSrc: "/img/hero-bg/reinhardt.png", portraitSrc: "/img/selected-heroes/reinhardt.png" },
  { name: "Orisa", listSrc: "/img/heroes/orisa.png", bgSrc: "/img/hero-bg/orisa.png", portraitSrc: "/img/selected-heroes/orisa.png" },
  { name: "Roadhog", listSrc: "/img/heroes/roadhog.png", bgSrc: "/img/hero-bg/roadhog.png", portraitSrc: "/img/selected-heroes/roadhog.png" },
  { name: "Zarya", listSrc: "/img/heroes/zarya.png", bgSrc: "/img/hero-bg/zarya.png", portraitSrc: "/img/selected-heroes/zarya.png" },
  { name: "Hammond", listSrc: "/img/heroes/hammond.png", bgSrc: "/img/hero-bg/hammond.png", portraitSrc: "/img/selected-heroes/hammond.png" },
  { name: "Sigma", listSrc: "/img/heroes/sigma.png", bgSrc: "/img/hero-bg/sigma.png", portraitSrc: "/img/selected-heroes/sigma.png" }
]

// need: sigma, hammond, doomfist, moira, brigitte, baptiste

class HeroSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroClass: { name: "attack", src: "/img/attack-icon.png" },
      dropdownVisible: false,
      countdownTime: 30,
      animating: false,
      currentHero: { name: "Bastion", listSrc: "/img/heroes/bastion.png", bgSrc: "/img/hero-bg/bastion.png", portraitSrc: "/img/selected-heroes/bastion.png" },
    }
    this.handleHeroClassChange = this.handleHeroClassChange.bind(this);
  }

  componentDidMount() {
    // start a timer to count down the countdown
    setInterval(() => {
      const newTime = this.state.countdownTime > 0 ? this.state.countdownTime - 1 : 30
      this.setState({
        countdownTime: newTime
      })
    }, 1000)
  }

  handleHeroClassChange(event) {
    console.log(event);
    if (event === "support") {
      this.setState({
        heroClass: { name: "support", src: "/img/support-icon.png" },
        dropdownVisible: false
      });
    } else if (event === "attack") {
      this.setState({
        heroClass: { name: "attack", src: "/img/attack-icon.png" },
        dropdownVisible: false
      });
    } else if (event === "tank") {
      this.setState({
        heroClass: { name: "tank", src: "/img/tank-icon.png" },
        dropdownVisible: false
      });
    }
  }

  setSelectedHero(hero) {
    setTimeout(() => {
      this.setState({
        animating: true
      })
    }, 100)
    setTimeout(() => {
      this.setState({
        currentHero: hero
      })
    }, 200)
    setTimeout(() => {
      this.setState({
        animating: false
      })
    }, 250)

  }

  toggleDropdown() {
    console.log('yo');
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  }

  render() {
    const animating = this.state.animating;
    return (
      <div className={"hero-selection " + (animating ? "animating" : "")} style={  {backgroundImage: `url(${this.state.currentHero.bgSrc})`}  }>
        <div className="hero-selection--header">
          <div className="level">
            <CSSTransition appear={true} in={true} timeout={500} classNames="title-animation">
              <h1>ATTACK</h1>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={700} classNames="title-animation">
              <h3>QUICK PLAY</h3>
            </CSSTransition>
            <CSSTransition appear={true} in={true} timeout={800} classNames="title-animation">
              <h2>KING's ROW</h2>
            </CSSTransition>
          </div>

          <div className={"hero large-up " + (animating ? "animating" : "")}>
            <CSSTransition appear={true} in={true} timeout={800} classNames="title-animation-up">
              <h1>{this.state.currentHero.name}</h1>
            </CSSTransition>
          </div>

          <div className="hero-selection-dropdown small-only">
            <div className="custom-select" onClick={() => this.toggleDropdown()}>
              <div className="custom-select-current">
                <img src={this.state.heroClass.src} width="25px" height="25px" />
                {/* <h4>{this.state.heroClass.name}</h4>*/}
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            {
              this.state.dropdownVisible
              ? <div className="custom-select--options">
                  <div className="custom-select--option" onClick={() => this.handleHeroClassChange("attack")}>
                    <img src="/img/attack-icon.png" width="25px" height="25px" />
                    <h4>ATTACK</h4>
                  </div>
                  <div className="custom-select--option" onClick={() => this.handleHeroClassChange("tank")}>
                    <img src="/img/tank-icon.png" width="25px" height="25px" />
                    <h4>TANK</h4>
                  </div>
                  <div className="custom-select--option" onClick={() => this.handleHeroClassChange("support")}>
                    <img src="/img/support-icon.png" width="25px" height="25px" />
                    <h4>SUPPORT</h4>
                  </div>
                </div>
              : null
            }
          </div>
        </div>

        <div className={"hero small-only " + (animating ? "animating" : "")}>
          <CSSTransition appear={true} in={true} timeout={800} classNames="title-animation-up">
            <h1>{this.state.currentHero.name}</h1>
          </CSSTransition>
        </div>

        <div className="countdown-wrapper">
          <h3>ASSEMBLE YOUR TEAM: </h3> <h3 className="count">{this.state.countdownTime}</h3>
        </div>

        <div className="team">
          <div className="large-up grid-col-placeholder"></div>
          <CSSTransition appear={true} in={true} timeout={200} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src={this.state.currentHero.portraitSrc} width="50px" />
            </div>
            <h3 className="teammate-gamertag">XTRAxSALTY</h3>

          </div>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={300} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src="/img/selected-heroes/dva.png" width="50px" />
            </div>
            <h3 className="teammate-gamertag">franchizzles</h3>

          </div>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={400} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src="/img/selected-heroes/lucio.png" width="50px" />
            </div>
            <h3 className="teammate-gamertag">x100xPercentx</h3>

          </div>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={500} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src="/img/selected-heroes/reinhardt.png" width="50px" />
            </div>
            <h3 className="teammate-gamertag">Squortellini</h3>

          </div>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={600} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src="/img/selected-heroes/junkrat.png" width="50px" />
            </div>
            <h3 className="teammate-gamertag">brosufgeorge</h3>

          </div>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={700} classNames="pop-up">
          <div className="teammate">

            <div className="teammate-portrait">
              <img className="teammate-selected-hero-image" src="/img/selected-heroes/mercy.png" width="50px" />
            </div>
            <h3 className="teammate-gamertag">kiwibonanza</h3>

          </div>
          </CSSTransition>
          <div className="large-up grid-col-placeholder"></div>
        </div>

        <div className="hero-selection-dropdown large-up">
          <div className="custom-select" onClick={() => this.toggleDropdown()}>
            <div className="custom-select-current">
              <img src={this.state.heroClass.src} width="25px" height="25px" />
              <h4>{this.state.heroClass.name}</h4>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          {
            this.state.dropdownVisible
            ? <div className="custom-select--options">
                <div className="custom-select--option" onClick={() => this.handleHeroClassChange("attack")}>
                  <img src="/img/attack-icon.png" width="25px" height="25px" />
                  <h4>ATTACK</h4>
                </div>
                <div className="custom-select--option" onClick={() => this.handleHeroClassChange("tank")}>
                  <img src="/img/tank-icon.png" width="25px" height="25px" />
                  <h4>TANK</h4>
                </div>
                <div className="custom-select--option" onClick={() => this.handleHeroClassChange("support")}>
                  <img src="/img/support-icon.png" width="25px" height="25px" />
                  <h4>SUPPORT</h4>
                </div>
              </div>
            : null
          }
        </div>

        <CSSTransition appear={true} in={true} timeout={500} classNames="pop-up">
        <div className="heroes">

          { this.state.heroClass.name === "tank"
            ? <div className="heroes-class">
              <div className="heroes-class--group">
                {
                  tankHeroes.map((hero, index) => {
                    return (
                      <div key={index} className={"hero-class--hero " + (hero.name === this.state.currentHero.name ? "selected" : "")} onClick={() => this.setSelectedHero(hero)}>
                        <div className="hero-image">
                          <img src={hero.listSrc} width="90px"/>
                        </div>
                        <h4 className="hero-name">{hero.name}</h4>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            : null
          }

          { this.state.heroClass.name === "attack"
            ? <div className="heroes-class">
              <div className="heroes-class--group">
                {
                  attackHeroes.map((hero, index) => {
                    return (
                      <div key={index} className={"hero-class--hero " + (hero.name === this.state.currentHero.name ? "selected" : "")} onClick={() => this.setSelectedHero(hero)}>
                        <div className="hero-image">
                          <img src={hero.listSrc} width="90px"/>
                        </div>
                        <h4 className="hero-name">{hero.name}</h4>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            : null
          }
          {
            this.state.heroClass.name === "support"
            ? <div className="heroes-class">
              <div className="heroes-class--group">
                {
                  supportHeroes.map((hero, index) => {
                    return (
                      <div key={index} className={"hero-class--hero " + (hero.name === this.state.currentHero.name ? "selected" : "")} onClick={() => this.setSelectedHero(hero)}>
                        <div className="hero-image">
                          <img src={hero.listSrc} width="90px"/>
                        </div>
                        <h4 className="hero-name">{hero.name}</h4>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            : null
          }
        </div>
        </CSSTransition>
      </div>
    )
  }
}

export default HeroSelection;
