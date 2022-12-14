import { ReactNode } from "react";
import Speaker from "./Speaker";
import ThingyNav from "./ThingyNav";

interface Props {
  speakers: {
    [speaker: string]: {
      speakerName?: string;
      text: ReactNode;
      video: string;
    };
  };
  focusedPage: number;
  setFocusedPage: (_focusedPage: number) => void;
}
const Thingy = ({ speakers, focusedPage, setFocusedPage }: Props) => {
  return (
    <div className="flex gap-4 lg:px-4">
      <ThingyNav
        speakers={speakers}
        focusedPage={focusedPage}
        setFocusedPage={setFocusedPage}
      />
      <main id="info-section" className={`flex-1`}>
        {Object.entries(speakers).map(
          ([speaker, { speakerName, text, video }], idx) => (
            <Speaker
              key={speaker}
              idx={idx}
              speaker={speaker}
              speakerName={speakerName}
              text={text}
              video={video}
              focusedPage={focusedPage}
            />
          )
        )}
      </main>
    </div>
  );
};

export default Thingy;
