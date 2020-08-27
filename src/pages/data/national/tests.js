import React from 'react'
import { graphql } from 'gatsby'
import TableResponsive from '~components/common/table-responsive'
import { FormatDate } from '~components/utils/format'
import Layout from '~components/layout'

export default ({ data }) => (
  <Layout
    title="National: testing"
    returnLinkTitle="Our Data"
    returnLink="/data"
    path="/data/national/tests"
    returnLinks={[
      { link: '/data' },
      { link: `/data/national`, title: 'Totals for the US' },
    ]}
  >
    <p>Testing</p>
    <TableResponsive
      labels={[
        {
          field: 'date',

          format: date => <FormatDate date={date} format="ccc LLL d yyyy" />,
        },
        {
          field: 'negative',
          isNumeric: true,
        },
        {
          field: 'negativeIncrease',
          isNumeric: true,
        },
        {
          field: 'positive',
          isNumeric: true,
        },
        {
          field: 'positiveIncrease',
          isNumeric: true,
        },
        {
          field: 'totalTestResults',
          isNumeric: true,
        },
      ]}
      data={data.allCovidUsDaily.nodes}
    />
  </Layout>
)

export const query = graphql`
  {
    allCovidUsDaily(sort: { fields: date, order: DESC }) {
      nodes {
        date
        negative
        negativeIncrease
        positive
        positiveIncrease
        totalTestResults
        totalTestResultsIncrease
      }
    }
  }
`
