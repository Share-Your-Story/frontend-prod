import blackhome from "../Assets/Icons/blackhome.png";
import blackfilledhome from "../Assets/Icons/blackfilledhome.png";
import grayhome from "../Assets/Icons/grayhome.png";
import blackaccount from "../Assets/Icons/blackaccount.png";
import blackfilledaccount from "../Assets/Icons/blackfilledaccount.png";
import grayaccount from "../Assets/Icons/grayaccount.png";
import blackheart from "../Assets/Icons/blackheart.png";
import blackfilledheart from "../Assets/Icons/blackfilledheart.png";
import grayheart from "../Assets/Icons/grayheart.png";
import blackcreate from "../Assets/Icons/blackcreate.png";
import blackfilledcreate from "../Assets/Icons/blackfilledcreate.png";
import graycreate from "../Assets/Icons/graycreate.png";
import blacktrending from "../Assets/Icons/blacktrending.png";
import blackfilledtrending from "../Assets/Icons/blackfilledtrending.png";
import graytrending from "../Assets/Icons/graytrending.png";
import { Icons } from "../Types/Icons";

const allIcons: Record<string, string> = {
  blackhome,
  blackfilledhome,
  grayhome,
  blackaccount,
  blackfilledaccount,
  grayaccount,
  blackheart,
  blackfilledheart,
  grayheart,
  blackcreate,
  blackfilledcreate,
  graycreate,
  blacktrending,
  blackfilledtrending,
  graytrending,
};

export default function getIcons(name: string): Icons {
  return {
    black: allIcons[`black${name}`],
    blackfilled: allIcons[`blackfilled${name}`],
    gray: allIcons[`gray${name}`],
  };
}
