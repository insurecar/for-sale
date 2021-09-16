import { h } from "preact";
import { t } from "ttag";

const Agent = ({ agents, video }) => {
  return (
    <div className="agent">
      <video autoplay controls src={video} width="500" height="500"></video>
    </div>
  );
};

export default Agent;
