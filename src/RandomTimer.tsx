import React, {ReactElement, useEffect, useState} from "react";
import { useTimer } from "react-use-precision-timer";
import {WizardAnimation} from "./WizardAnimation";
import {Button} from "@material-ui/core";
import {WizardStationary} from "./WizardStationary";

export const RandomTimer = (): ReactElement => {

  const [minValue, setMinValue] = useState<string>("5");
  const [maxValue, setMaxValue] = useState<string>("20");
  const [randomTime, setRandomTime] = useState<number | undefined>(undefined)
  const [showFinished, setShowFinished] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined)

  useEffect(() => {
    if (showFinished) {
      if (audio) return;
      const newAudio = new Audio("/magic-sound-effect.mp3")
      newAudio.play()
      newAudio.loop = true;
      setAudio(newAudio)
    } else {
      if (!audio) return;
      audio.loop = false;
      audio.pause()
      setAudio(undefined)
    }
  }, [showFinished])

  const completeTimer = () => {
    if (!randomTime) return;
    const timerMinutesInMillis = randomTime * 1000 * 60;
    if (timer.getElapsedRunningTime() > timerMinutesInMillis) {
      timer.stop()
      setRandomTime(undefined)
      setShowFinished(true)
    }
  }

  const timer = useTimer({ delay: 200, callback: completeTimer });

  const generateRandomTime = () => {
    if (parseInt(maxValue) <= parseInt(minValue)) {
      setShowError(true)
      return;
    }

    setShowError(false)

    const range = (parseInt(maxValue) - parseInt(minValue)) + 1
    const randomIndex = Math.floor(Math.random() * range);
    setRandomTime(parseInt(minValue) + randomIndex)
    timer.start();
  }

  const reset = () => {
    setShowFinished(false)
    setRandomTime(undefined)
    timer.stop()
  }

  return (
    <div className="container">
      <div className="row mts">
        <a className="pull-right phs" href="/about">
          about
        </a>
      </div>

      <div className="row ptxl">
        <div className="col-xs-12 fdr fjc">
          <h2 className="text-xxl">start a random timer</h2>
        </div>
      </div>
      <div className="row ptl">
        <div className="col-xs-12 fdr fjc fac text-xl">
          <span className="prd">between</span>
          <input className="count" type="number" value={minValue} onChange={(event) => setMinValue(event.target.value)}/>
          <span className="phd">&</span>
          <input className="count" type="number" value={maxValue} onChange={(event) => setMaxValue(event.target.value)}/>
          <span className="pld">minutes</span>
        </div>
      </div>

      <div className="row ptl mbl">
        <div className="col-xs-12 fdr fjc">
          <Button variant="outlined" onClick={generateRandomTime}>start</Button>
          <div className="mls"><Button variant="outlined" onClick={reset}>reset</Button></div>
        </div>
      </div>

      {showError && <>
      <div className="row ptl mbl">
        <div className="col-xs-12 fdc fac ">
          <h2 className="text-l">Error!</h2>
          <p>Second value in range must be larger than first</p>
        </div>
      </div>
      </>}

      {randomTime ? <div className="fdc fac">
          <WizardAnimation />
          <h2 className="text-l bold ptd" style={{height: "50px"}}>Timer running...</h2>
        </div> :
        showFinished ? <div className="fdc fac">
          <WizardStationary />
          <h2 className="bold mtd text-animate" style={{height: "50px"}}>Timer finished!</h2>
        </div>
        : <div style={{height: 290}}/>}
    </div>
  );
};
