import {ReactElement} from "react";

export const WizardStationary = (): ReactElement => {
  return (
    <>
      <div className="scene-s">
        <div className="objects-s">
          <div className="square-s"/>
          <div className="circle-s"/>
          <div className="triangle-s"/>
        </div>
        <div className="wizard-s">
          <div className="body-s"/>
          <div className="right-arm-s">
            <div className="right-hand-s"/>
          </div>
          <div className="left-arm-s">
            <div className="left-hand-s"/>
          </div>
          <div className="head-s">
            <div className="beard-s"/>
            <div className="face-s">
              <div className="adds-s"/>
            </div>
            <div className="hat-s">
              <div className="hat-of-the-hat-s"/>
              <div className="four-point-star-s --first"/>
              <div className="four-point-star-s --second"/>
              <div className="four-point-star-s --third"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}