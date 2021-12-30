import React, { Fragment } from "react";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";

import KellerkindLogo from "img/kellerkindlogo";
import PalettteAppLogo from "img/palettteapplogo";
import LifeTimeLogo from "img/lifetimelogo";
import BamLogo from "img/bamlogo";

// const GitHubLink = <Link to="/lifetime">See it in GitHub</Link>
// const NetlifyLink = <Link to="/palettteapp">Go to Site</Link>
// const KellerkindLink = <Link to="/kellerkind">Read More</Link>
// const BamLink = <Link to="/bam">Read More</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={BamLogo()}
            title="Love Thy Neighbor"
            abstract="Capstone project built for Re:Coded bootcamp."
            githubLink={
              <a href="https://github.com/ReCoded-Org/capstone-turkey-love-thy-neighbor">
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://lovethyneighbor.netlify.app">See it live</a>
            }
          />
          <Project
            logo={KellerkindLogo()}
            title="Board Project"
            abstract="A warehouse management app to practice React skills."
            githubLink={
              <a href="https://github.com/Iseluin/board-project">
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://boardproject.netlify.app">See it live</a>
            }
          />
          <Project
            logo={PalettteAppLogo()}
            title="Movie Project"
            abstract="An object oriented project utilizing TMDB"
            githubLink={
              <a href="https://github.com/Iseluin/oop-movie-page">
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://oopmovieproject.netlify.app">See it live</a>
            }
          />
          <Project
            logo={LifeTimeLogo()}
            title="MadLibz"
            abstract="Our interpretation of the popular campfire game"
            githubLink={
              <a href="https://github.com/Iseluin/mad-libz">See it in Github</a>
            }
            netlifyLink={
              <a href="https://recodedmadlibz.netlify.app">See it live</a>
            }
          />
        </Fragment>
      }
    />
  );
};

export default Work;
