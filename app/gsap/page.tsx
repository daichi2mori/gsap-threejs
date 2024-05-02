import GsapFrom from "../components/GsapFrom";
import GsapFromTo from "../components/GsapFromTo";
import GsapScrollTrigger from "../components/GsapScrollTrigger";
import GsapStagger from "../components/GsapStagger";
import GsapText from "../components/GsapText";
import GsapTimeline from "../components/GsapTimeline";
import GsapTo from "../components/GsapTo";

const page = () => {
  return (
    <div className="p-5">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeline />
      <GsapStagger />
      <GsapScrollTrigger />
      <GsapText />
    </div>
  );
};

export default page;
