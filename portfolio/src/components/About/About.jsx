import styles from './About.module.css'

export default function About({ id }) {
    return (
        <section id={id} className={`${styles.about} section`}>
            <div className="container">
                <h2 className={styles.title}>About</h2>
                <div className={styles.articlesContainer}>
                    <div className={styles.article}>
                        <h3 className={styles.articleTitle}>Who Am I?</h3>
                        <p> 
                            I am a software engineer/web developer based in London, UK. 
                            <br />
                            I am a graduate of the amazing School of Code, where I solidified 
                            my desire to code. I learned a lot about DevOps, JavaScript, React and Node.js. 
                            How to be an agile team player and a presenter.
                            <br />
                            I love working in both front-end and back-end. Nailing a Figma design 
                            file by coding it up is super fun.
                            <br />
                            I love the varying challenges that come my way, hitting my head against 
                            the wall while solving them, playing Whack-A-Mole with bugs, slowly 
                            trying to shake off this imposter syndrome.

                            <br />
                            <br />

                            I am currently looking to be hired in my first role, 
                            where my eager fingers can be set free to contribute to something cool.
                            My training and bartending days have given me a "unique set of skills"
                            that I bring with me to be an avid team member and contributor.

                            <br />
                            <br />

                            Check out both my personal and Scrimba projects in the Work section below.
                        </p>
                    </div>
                    <div className={styles.article}>
                        <h3 className={styles.articleTitle}>Upcoming Projects</h3>
                        <p>
                            I am currently in the planning process of making a personal dashboard 
                            app.
                            <br />
                            <br />
                            It will take the lessons learned from my project called Dew It below, 
                            which is a to-do list with API calls to Nasa photo of the day and a 
                            random joke API.
                            <br />
                            <br />
                            I will make it with Next.js and will feature widgets such as a todo 
                            list, weather, jokes, quotes, news and finance with the background 
                            being the NASA photo of the day.
                            <br />
                            <br />
                            I will also add Authentication and Authorisation as well as potentially 
                            adding AI features.
                            <br />
                            <br />
                            I am planning on testing myself with this project to put together 
                            everything that I have learned thus far and make a Full-Stack App 
                            from the ground up.
                            <br />
                            <br />
                            Stay tuned for more information coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}