
import React from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';
import './styles.css'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <section className='hero is-medium'>
        <div className='hero-body'>
          <div className='container'>

            <div className='hero-inner'>

              <div>
                <h2 className='title has-text-white' style={{paddingBottom: '3px'}}>Party Q</h2>
                <h6 className='subtitle has-text-white'>
                    Join your friends. Add to the queue.</h6>
                <Button style={{backgroundColor: "#1DB954", color: "#ffffff", border: 'none', padding: '10px', fontSize: '1.05rem'}}
                    onClick={() => window.location='/party'}
                    >Host or Join A Party
                </Button>

              </div>

              <br />
                <div className='banner-image'>
                    <img src='dj.png' alt='banner' width='75%'/>
                </div>
            </div>

          </div>
        </div>          
      </section>

      <section className='section has-background-white has-text-dark'>
            <div className="container">
                <div className="content" style={{textAlign: 'center'}}>
                    <h2 className="has-text-weight-light">How It Works</h2>

                    <h4 className="has-text-weight-light">A friend with Spotify Premium hosts the party...<br />
                            and then starts the queue by playing a song through their Spotify.</h4>

                    <h4 className="has-text-weight-light">
                        Join your friend's party through the access code.<br />Now anyone can add songs to the playlist!
                    </h4>

                </div>
            </div>
      </section>

      <section className='section has-background-light'>
        <div className='container'>
          <div className='content'>

            <div className='columns is-variable is-7 has-text-dark'>
              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='friends.png' alt='friends' width='75'/>
                  </div>
                  <h3 className='title has-text-weight-light'>Enjoy Friendship</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>You guys will have blast.</h5>
                  <p>
                      Hanging out with friends with some music on is great. What's even better? Using <strong>Party Q </strong>
                      so that everyone can add to the playlist.
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='music.png' alt='music' width='75'/>
                  </div>                  
                  <h3 className='title has-text-weight-light'>Great Music</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>I can already feel the beat.</h5>
                  <p>
                      Of course there'll be great music... It's up to you! You can choose any song from Spotify.
                  </p>
                </div>
              </div>

              <div className='column'>
                <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='free.png' alt='free' width='75'/>
                  </div>                  
                  <h3 className='title has-text-weight-light'>Free Service</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>We'll keep your wallet happy.</h5>
                  <p>
                      Using <strong>Party Q</strong> has no charges! However, the host of your party will need a
                      Spotify Premium account. That's how the Spotify API works.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>          
      </section>
      <section className='section has-background-white has-text-dark'>
        <div className='container'>
          <div className='content'>
            <h2 className='title has-text-weight-light'>Users are saying...</h2>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon' >
                <p className='image is-64x64'>
                  <img src='person.png' alt='person' />
                </p>
                <div>Mike S.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                      I sometimes like what my friends play on Spotify, but I want a voice, too. With this website,
                      now we can all add our songs to the playlist. Everyone wins. Bebap retatat, I love Party Q!
                </blockquote>
              </div>
            </article>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon'>
                <p className='image is-64x64'>
                  <img src='person2.png' alt='person2' />
                </p>
                <div>Wendy E.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                    I take a lot of road trips with my friends. We don't always agree on music. I always though, "why
                     can we all add songs to the playlist?" With Party Q, now we can! It's lovely.
                </blockquote>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className='section orange'>
        <div className='container'>
          <div className='content has-text-centered'>

            <div className='serving-nc-wrapper' >

              <div className='serving-nc'>
                <img src='unc.png' alt='nc' width='200' className='nc-image'/> <br /><br />

                <div>
                  <h3 className='title has-text-weight-normal has-text-white serving-nc-label'>Proudly originated in Chapel Hill, NC.</h3>
                  <h4 className='subtitle has-text-weight-normal has-text-white'>Now bringing friends together over music all over.</h4>
                </div>
              </div>

              <div className='is-divider' data-content='READY?'></div>

              <button className='button is-light'>Login through Spotify</button>
            </div>


          </div>
        </div>
      </section>

      <footer className='footer has-text-dark'>
        <div className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <h6 className='subtitle has-text-grey'>Corporate HQ</h6>

                <div>105 Example Court</div>
                <div>Chapel Hill, NC</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Contact</h6>

                <div>919-791-5823</div>      
                <div>msokol@live.unc.edu</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Other Features</h6>

                <div>Example1</div>
                <div>Example2</div>
                <div>Example3</div>
                <div>Example4</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Account</h6>

                <a href='/'>Lorem</a>
                <br></br>
                <a href='/'>Ipsum</a>
              </div>
            </div>
          </div>

          <div className='is-divider' data-content=''></div>

          <div style={{textAlign: 'left'}}>Website by Mitchell Sokol - Personal Project 2020
            <br/>Made with React, Bulma, and Java Spring Boot
            <br/>Deployed onto the web using an AWS EC2 RHEL instance
            <br /><a href='https://github.com/msokol98'>See source code</a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Home;