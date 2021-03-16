import Head from "next/head";
import { GetServerSideProps } from "next";

import React from "react";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>
            Home | Ketchup.it - o pomodoro que te deixa em movimento
          </title>
          <meta
            name="title"
            content="Home | Ketchup.it - o pomodoro que te deixa em movimento"
          />
          <meta
            name="description"
            content="O ketchupit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://movit.vercel.app/" />
          <meta
            property="og:title"
            content="Home | Ketchup.it - o pomodoro que te deixa em movimento"
          />
          <meta
            property="og:description"
            content="O ketchupit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."
          />
          <meta property="og:image" content="preview.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://movit.vercel.app/" />
          <meta
            property="twitter:title"
            content="Home | move.it - o app que te deixa em movimento"
          />
          <meta
            property="twitter:description"
            content="O movit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."
          />
          <meta property="twitter:image" content="preview.png" />
          <title>Home | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
