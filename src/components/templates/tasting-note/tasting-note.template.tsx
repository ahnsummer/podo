import Breadcrumbs from "@/components/molecules/breadcrumbs/breadcrumbs.index";
import TastingNoteBridge from "./tasting-note.bridge";
import WineInfo from "@/components/molecules/wine-info/wine-info.index";

const TastingNoteTemplate = () => {
  return (
    <div className="px-4 py-8 overflow-hidden">
      <WineInfo />
      <Breadcrumbs />
      <TastingNoteBridge />
    </div>
  );
};

export default TastingNoteTemplate;
