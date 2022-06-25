import React, { ReactElement } from "react";

export const About = (): ReactElement => {
  return (
    <div className="container">
      <div className="row mts">
        <a className="pull-right phs" href="/">
          home
        </a>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h1 className="text-xl">about</h1>

          <h3 className="text-l mtm">who built this?</h3>
          <p>
            <a href="http://anneloverso.com/">Anne LoVerso</a>
            <a href="https://twitter.com/AnneLoVerso">
              <img alt="twitter" className="twitter" src="/assets/twitter.svg" />
            </a>
          </p>

          <h3 className="text-l mtm">why?</h3>
          <p>
            The intended usage is for an activity called <b>Musical Chairs GMing</b>, invented by my brilliant partner, Vanja.

            Musical Chairs GMing is a style of playing a freeform tabletop RPG (like PbtA) in which all players generate an adventure hook together,
            and then set a timer that goes off at random intervals. When the timer dings, it’s time to switch GMs! You take over from where the last person left off!
          </p>
          <p>
             It's a wild, chaotic blast, and it necessitates a timer that goes off at random intervals, and one that doesn't tell you how much time is left!
          </p>

          <h3 className="text-l mtm">source code?</h3>
          <p>
            Sure thing, here's the <a href="https://github.com/aloverso/random-timer">GitHub</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
