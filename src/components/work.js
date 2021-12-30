import React, { Fragment } from "react";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";

import BoardProjectLogo from "../img/BoardProjectLogo";
import MovieProjectLogo from "img/MovieProjectLogo";
import MadlibzLogo from "../img/MadlibzLogo";
import LoveThyNeighborLogo from "../img/LoveThyNeighborLogo";

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
            logo={LoveThyNeighborLogo()}
            title="Love Thy Neighbor"
            abstract="Capstone team project built for Re:Coded bootcamp.
            Love thy Neighbor helps people to find neighbors nearby and invite them to a social meetup, helping them to build a dynamic and warm community that uplifts each other in the dark days of Covid-19 pandemic."
            githubLink={
              <a
                href="https://github.com/ReCoded-Org/capstone-turkey-love-thy-neighbour"
                target={"_blank"}
              >
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://lovethyneighbor.netlify.app" target={"_blank"}>
                Go to Site
              </a>
            }
          />
          <Project
            logo={BoardProjectLogo()}
            title="Warehouse Management Board Project"
            abstract="A warehouse management app to practice React skills."
            githubLink={
              <a
                href="https://github.com/Iseluin/board-project"
                target={"_blank"}
              >
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://boardproject.netlify.app" target={"_blank"}>
                Go to Site
              </a>
            }
          />
          <Project
            logo={MovieProjectLogo()}
            title="Movie Project"
            abstract="An object oriented project utilizing TMDB"
            githubLink={
              <a
                href="https://github.com/Iseluin/oop-movie-page"
                target={"_blank"}
              >
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://oopmovieproject.netlify.app" target={"_blank"}>
                Go to Site
              </a>
            }
          />
          <Project
            logo={MadlibzLogo()}
            title="MadLibz"
            abstract="Our interpretation of the popular campfire game"
            githubLink={
              <a href="https://github.com/Iseluin/mad-libz" target={"_blank"}>
                See it in Github
              </a>
            }
            netlifyLink={
              <a href="https://recodedmadlibz.netlify.app" target={"_blank"}>
                Go to Site
              </a>
            }
          />
        </Fragment>
      }
    />
  );
};

export default Work;
