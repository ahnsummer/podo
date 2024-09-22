import Breadcrumbs from "@/components/molecules/breadcrumbs/breadcrumbs.index";
import { useRouter } from "next/router";
import TastingNoteBridge from "./tasting-note.bridge";

const TastingNoteTemplate = () => {
  const router = useRouter();

  return (
    <div className="px-4 py-8 overflow-hidden">
      <Breadcrumbs />
      {/* <TastingNoteBridge /> */}
    </div>
  );
};

export default TastingNoteTemplate;
