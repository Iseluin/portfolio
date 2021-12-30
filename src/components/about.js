import React, { Fragment } from 'react'

import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi. I'm Kutay Kağan, a Front-end Developer living in&nbsp;İstanbul. I bring
            ideas to life with code and&nbsp;design.
          </Big>
          <p>
            In my work I strive to optimize the aesthetic value and usability of
            products without losing sight of the technical challenges and
            limitations.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about coding in general, guitars,
            history and occasional hiking.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
