import React from 'react'
import { graphql } from 'gatsby'
import Layout from '~components/layout'
import RaceStateSeparate from '~components/pages/race/dashboard/state-separate'
import RaceStateCombined from '~components/pages/race/dashboard/state-combined'

export default ({ pageContext, path, data }) => {
  const state = pageContext
  const { covidRaceDataCombined, covidRaceDataSeparate } = data
  return (
    <Layout
      title={`${state.name}: Racial data tracker`}
      returnLinks={[
        { link: '/data' },
        { link: `/data/state/${state.slug}`, title: state.name },
      ]}
      path={path}
    >
      {covidRaceDataCombined && (
        <RaceStateCombined state={covidRaceDataCombined} />
      )}
      {covidRaceDataSeparate && (
        <RaceStateSeparate state={covidRaceDataSeparate} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($state: String!) {
    covidRaceDataCombined(state: { eq: $state }) {
      aianANHPIDeathNotes
      aianANHPIPosNotes
      aianDeathCaution
      aianDeathDispFlag
      aianDeathNotes
      aianDeathNotes
      aianDeaths
      aianPctDeath
      aianPctPop
      aianPctPos
      aianPosCaution
      aianPosDispFlag
      aianPositives
      aianPosNotes
      aianPosNotes
      anyDeathData
      anyPosData
      asianANHPIDeathNotes
      asianANHPIPosNotes
      asianDeathCaution
      asianDeathDispFlag
      asianDeathNotes
      asianDeathNotes
      asianDeaths
      asianPctDeath
      asianPctPop
      asianPctPos
      asianPosCaution
      asianPosDispFlag
      asianPositives
      asianPosNotes
      asianPosNotes
      blackANHPIDeathNotes
      blackANHPIPosNotes
      blackDeathCaution
      blackDeathDispFlag
      blackDeathNotes
      blackDeaths
      blackPctDeath
      blackPctPop
      blackPctPos
      blackPosCaution
      blackPosDispFlag
      blackPositives
      blackPosNotes
      id
      knownRaceEthDeath
      knownRaceEthPos
      latinXDeathCaution
      latinXDeathDispFlag
      latinXDeathNotes
      latinXDeaths
      latinXPctDeath
      latinXPctPop
      latinXPctPos
      latinXPosCaution
      latinXPosDispFlag
      latinXPositives
      latinXPosNotes
      name: stateName
      nhpiANHPIDeathNotes
      nhpiANHPIPosNotes
      nhpiDeathCaution
      nhpiDeathDispFlag
      nhpiDeathNotes
      nhpiDeathNotes
      nhpiDeaths
      nhpiPctDeath
      nhpiPctPop
      nhpiPctPos
      nhpiPosCaution
      nhpiPosDispFlag
      nhpiPositives
      nhpiPosNotes
      nhpiPosNotes
      otherANHPIDeathNotes
      otherANHPIPosNotes
      otherDeathCaution
      otherDeathDispFlag
      otherDeathNotes
      otherDeathNotes
      otherDeaths
      otherPctDeath
      otherPctPop
      otherPctPos
      otherPosCaution
      otherPosDispFlag
      otherPositives
      otherPosNotes
      otherPosNotes
      state
      state
      stateName
      twoANHPIDeathNotes
      twoANHPIPosNotes
      twoDeathCaution
      twoDeathDispFlag
      twoDeathNotes
      twoDeathNotes
      twoDeaths
      twoPctDeath
      twoPctPop
      twoPctPos
      twoPosCaution
      twoPosDispFlag
      twoPositives
      twoPosNotes
      twoPosNotes
      unknownRaceEthDeath
      unknownRaceEthPos
      whiteANHPIDeathNotes
      whiteANHPIPosNotes
      whiteDeathCaution
      whiteDeathDispFlag
      whiteDeathNotes
      whiteDeaths
      whitePctDeath
      whitePctPop
      whitePctPos
      whitePosCaution
      whitePosDispFlag
      whitePositives
      whitePosNotes
    }
    covidRaceDataSeparate(state: { eq: $state }) {
      aianANHPIDeathNotes
      aianANHPIPosNotes
      aianDeathCaution
      aianDeathDispFlag
      aianDeathNotes
      aianDeathNotes
      aianDeaths
      aianPctDeath
      aianPctPop
      aianPctPos
      aianPosCaution
      aianPosDispFlag
      aianPositives
      aianPosNotes
      aianPosNotes
      aianSpecialCaseNotes
      aianSpecialCaseNotes
      anyDeathData
      anyPosData
      asianANHPIDeathNotes
      asianANHPIDeathNotes
      asianANHPIPosNotes
      asianANHPIPosNotes
      asianDeathCaution
      asianDeathDispFlag
      asianDeathNotes
      asianDeathNotes
      asianDeaths
      asianPctDeath
      asianPctPop
      asianPctPos
      asianPosCaution
      asianPosDispFlag
      asianPositives
      asianPosNotes
      asianPosNotes
      asianSpecialCaseNotes
      asianSpecialCaseNotes
      blackANHPIDeathNotes
      blackANHPIPosNotes
      blackDeathCaution
      blackDeathDispFlag
      blackDeathNotes
      blackDeaths
      blackPctDeath
      blackPctPop
      blackPctPos
      blackPosCaution
      blackPosDispFlag
      blackPositives
      blackPosNotes
      blackSpecialCaseNotes
      blackSpecialCaseNotes
      deathEthData
      deathRaceData
      id
      knownEthDeath
      knownEthPos
      knownRaceDeath
      knownRacePos
      latinXANHPIDeathNotes
      latinXANHPIPosNotes
      latinXDeathCaution
      latinXDeathDispFlag
      latinXDeathNotes
      latinXDeaths
      latinXPctDeath
      latinXPctPop
      latinXPctPos
      latinXPosCaution
      latinXPosDispFlag
      latinXPositives
      latinXPosNotes
      name: stateName
      nhpiANHPIDeathNotes
      nhpiANHPIDeathNotes
      nhpiANHPIPosNotes
      nhpiANHPIPosNotes
      nhpiDeathCaution
      nhpiDeathDispFlag
      nhpiDeathNotes
      nhpiDeathNotes
      nhpiDeaths
      nhpiPctDeath
      nhpiPctPop
      nhpiPctPos
      nhpiPosCaution
      nhpiPosDispFlag
      nhpiPositives
      nhpiPosNotes
      nhpiPosNotes
      nhpiSpecialCaseNotes
      nhpiSpecialCaseNotes
      nonhispanicANHPIDeathNotes
      nonhispanicANHPIPosNotes
      nonhispanicDeathCaution
      nonhispanicDeathDispFlag
      nonhispanicDeathNotes
      nonhispanicDeaths
      nonhispanicPctDeath
      nonhispanicPctPop
      nonhispanicPctPos
      nonhispanicPosCaution
      nonhispanicPosDispFlag
      nonhispanicPositives
      nonhispanicPosNotes
      nonhispanicSpecialCaseNotes
      otherANHPIDeathNotes
      otherANHPIPosNotes
      otherDeathCaution
      otherDeathCaution
      otherDeathDispFlag
      otherDeathNotes
      otherDeathNotes
      otherDeaths
      otherPctDeath
      otherPctPop
      otherPctPos
      otherPosCaution
      otherPosDispFlag
      otherPositives
      otherPosNotes
      otherPosNotes
      otherSpecialCaseNotes
      otherSpecialCaseNotes
      posEthData
      posRaceData
      state
      twoANHPIDeathNotes
      twoANHPIPosNotes
      twoDeathCaution
      twoDeathDispFlag
      twoDeathNotes
      twoDeathNotes
      twoDeaths
      twoPctDeath
      twoPctPop
      twoPctPos
      twoPosCaution
      twoPosDispFlag
      twoPositives
      twoPosNotes
      twoPosNotes
      twoSpecialCaseNotes
      twoSpecialCaseNotes
      unknownEthDeath
      unknownEthPos
      unknownRaceDeath
      unknownRacePos
      whiteANHPIDeathNotes
      whiteANHPIPosNotes
      whiteDeathCaution
      whiteDeathDispFlag
      whiteDeathNotes
      whiteDeaths
      whitePctDeath
      whitePctPop
      whitePctPos
      whitePosCaution
      whitePosDispFlag
      whitePositives
      whitePosNotes
      whiteSpecialCaseNotes
      whiteSpecialCaseNotes
    }
  }
`
