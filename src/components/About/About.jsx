import styles from './About.module.css';

export default function About({ id }) {
  return (
    <section id={id} className={`${styles.about} section`}>
      <div className='container'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.articlesContainer}>
          <div className={styles.article}>
            <h3 className={styles.articleTitle}>Who Am I?</h3>
            <p className={styles.articleText}>
              I am a software engineer/web developer based in London, UK.
              <br />
              I am a graduate of the amazing School of Code, where I solidified
              my desire to code. I learned a lot about DevOps, JavaScript, React
              and Node.js. How to be an agile team player and a presenter.
              <br />
              I love working in both front-end and back-end. Nailing a Figma
              design file by coding it up is super fun.
              <br />
              I love the varying challenges that come my way, hitting my head
              against the wall while solving them, playing Whack-A-Mole with
              bugs, slowly trying to shake off this imposter syndrome.
              <br />
              <br />
              I am currently looking to be hired in my first role, where my
              eager fingers can be set free to contribute to something cool. My
              training and bartending days have given me a "unique set of
              skills" that I bring with me to be an avid team member and
              contributor.
              <br />
              <br />
              Check out both my personal and Scrimba projects in the Work
              section below.
            </p>
          </div>
          <div className={styles.article}>
            <h3 className={styles.articleTitle}>Upcoming Projects</h3>
            <p className={styles.articleText}>
              I have just completed version 1.0 of my personal dashboard app
              called{' '}
              <a href='https://stardweller.vercel.app/' className={styles.link}>
                Star Dweller
              </a>
              <br />
              <br />
              Built with TypeScript, Next.js and Supabase using Agile and TDD
              methodologies
              <br />
              <br />
              I learned a lot from the experience of making this and have
              definitley grown as a developer because of it. TypeScript and TDD
              are now my new best friends. I feel safer and more comfortable
              when coding especially when deploying. Not only that but I feel
              that I understand my code more now, providing a great learning
              experience.
              <br />
              <br />
              Check out it in the{' '}
              <a href='#work' className={styles.link}>
                Work
              </a>{' '}
              section below.
              <br />
              <br />I am planning on continuing to develop and add new features,
              such as drag and drop functionality for the widgets and location
              based weather fetching, so stay tuned for more...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
