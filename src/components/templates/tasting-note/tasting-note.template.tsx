import Breadcrumbs from "@/components/molecules/breadcrumbs/breadcrumbs.index";
import TastingNoteBridge from "./tasting-note.bridge";

const TastingNoteTemplate = () => {
  return (
    <div className="px-4 py-8 overflow-hidden">
      <Breadcrumbs />
      <TastingNoteBridge />
    </div>
  );
};

export default TastingNoteTemplate;
