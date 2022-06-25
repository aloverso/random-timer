import {ReactElement} from "react";

interface Props {
  message: string;
}

export const PlanetAnimation = (props: Props): ReactElement => {
  return (
    <div className="content">
      <div className="planet">
        <div className="ring"></div>
        <div className="cover-ring"></div>
        <div className="spots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>
      </div>
      <p>{props.message}</p>
    </div>
  )
}