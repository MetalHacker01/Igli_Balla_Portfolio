import BootHero from "./components/BootHero";
import StageSelect from "./components/StageSelect";
import CharStats from "./components/CharStats";
import HighScores from "./components/HighScores";
import InsertCoin from "./components/InsertCoin";

export default function RetroHome() {
  return (
    <>
      <BootHero />
      <StageSelect />
      <CharStats />
      <HighScores />
      <InsertCoin />
    </>
  );
}
