import Head from "next/head";

import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import {CompletedChallenges} from "../components/CompletedChallenges";
import {Countdown} from "../components/Countdown";
import {ChallengeBox} from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it - o app que te deixa em movimento</title>
        <meta name="title" content="Home | move.it - o app que te deixa em movimento"/>
        <meta name="description" content="O movit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://movit.vercel.app/"/>
        <meta property="og:title" content="Home | move.it - o app que te deixa em movimento"/>
        <meta property="og:description" content="O movit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."/>
        <meta property="og:image" content="preview.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://movit.vercel.app/"/>
        <meta property="twitter:title" content="Home | move.it - o app que te deixa em movimento"/>
        <meta property="twitter:description" content="O movit foi construído em React, Next.js e Typescript durante a NLW#4 da Rocketseat e traz desafios laborais para manter o seu corpo e visão saudáveis no ambiente de trabalho/estudo."/>
        <meta property="twitter:image" content="preview.png"/>
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
  );
}
