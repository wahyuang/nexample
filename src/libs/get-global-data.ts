import { getNavMenu } from "./api";
import { GlobalData } from "@/types/global-data";

export async function getGlobalData(): Promise<GlobalData> {
  const navMenu = await getNavMenu(`main-navigation`);
  const navItems = navMenu.data.length
    ? navMenu.data[0].attributes.items
    : { data: [] };

  return {
    MainMenu: {
      ...navItems,
    },
  };
}
