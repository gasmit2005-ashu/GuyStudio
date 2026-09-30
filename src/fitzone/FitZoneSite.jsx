import { useCallback, useState } from "react";
import { useDocumentMeta } from "../lib/router.jsx";
import FitZoneNavbar from "./FitZoneNavbar.jsx";
import FitZoneHero from "./FitZoneHero.jsx";
import FitZoneAbout from "./FitZoneAbout.jsx";
import FitZonePrograms from "./FitZonePrograms.jsx";
import FitZoneSchedule from "./FitZoneSchedule.jsx";
import FitZoneTrainers from "./FitZoneTrainers.jsx";
import FitZoneMembership from "./FitZoneMembership.jsx";
import FitZoneTrialCTA from "./FitZoneTrialCTA.jsx";
import FitZoneGallery from "./FitZoneGallery.jsx";
import FitZoneFAQ from "./FitZoneFAQ.jsx";
import FitZoneContact from "./FitZoneContact.jsx";
import FitZoneFooter from "./FitZoneFooter.jsx";
import TrialModal from "./TrialModal.jsx";

export default function FitZoneSite() {
  const [trialOpen, setTrialOpen] = useState(false);
  const onBook = useCallback(() => setTrialOpen(true), []);
  const onClose = useCallback(() => setTrialOpen(false), []);

  useDocumentMeta(
    "FitZone Fitness — Premium Fitness Website Demo | GuyStudio",
    "Explore a premium fitness website concept created by GuyStudio for modern gyms and fitness businesses."
  );

  return (
    <div className="fz-root min-h-screen overflow-x-clip bg-fz-bg font-body text-white">
      <FitZoneNavbar onBook={onBook} />
      <main>
        <FitZoneHero onBook={onBook} />
        <FitZoneAbout />
        <FitZonePrograms />
        <FitZoneSchedule />
        <FitZoneTrainers />
        <FitZoneMembership onBook={onBook} />
        <FitZoneTrialCTA onBook={onBook} />
        <FitZoneGallery />
        <FitZoneFAQ />
        <FitZoneContact onBook={onBook} />
      </main>
      <FitZoneFooter />
      <TrialModal open={trialOpen} onClose={onClose} />
    </div>
  );
}
