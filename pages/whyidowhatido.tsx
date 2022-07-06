import React from 'react';
import styles from '../styles/Home.module.css';

const content = {
  intro: 'I’ve spent a lot of time over the past few years meeting new people. \n In these interactions, whether I’m meeting new classmates, setting up coffee chats, interviewing for jobs, or ✨networking✨ in general, I find myself recounting the exact same list of experiences. Almost through rote repetition, I have my answer to “tell me about yourself” down to a science. \n When people meet you for the first time, they often ask what you do. Each conversation participant exchanges information about their job, university program, hobbies… interests… but the underlying question that rarely makes it into surface level discussion – the far more interesting question – is why you do what you do. Not only is it undoubtedly the key to tying together awesome scholarship essays and nailing interviews, being able to articulate why you do what you do grounds you in who you are, helps you build healthy habits, and magically attracts people and opportunities that get you excited to wake up every day.  \n So with that epic introductory paragraph, let’s dive in.', 
  beginning:{},
  impact:{},
};
export default function WhyIDoWhatIDo() {
  return (
    <div className={styles.post}>   
      <h1 className={styles.h1}>Why I do what I do</h1>
      <p className={styles.h2}> A somewhat long-winded manifesto.</p>
      <p>{content.intro}</p>
    </div>
  ); 
}