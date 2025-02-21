import * as path from 'path';

export const GAME_ID = 'gothic1remake';
export const GAME_NAME = "Gothic 1 Remake";
export const GAME_FOLDER_STEAM = "Gothic_1_Remake";
export const GAME_FOLDER_EPIC = "Gothic_1_Remake";
export const EXECUTABLE = "AliensDarkDescentGameSteam-Win64-Shipping.exe"; // path to executable, relative to game root
export const UEPROJECTNAME = "ASF";  // the name of the game project
export const EPIC_ID = "";
export const STEAM_ID = "1297900";
export const GOG_ID = "1537831577";

export const UE4SSMODURL = "https://www.nexusmods.com/hogwartslegacy/mods/942";


export const MODSFOLDER_PATH = path.join(UEPROJECTNAME, "Content", "Paks", "~mods"); // relative to game root
export const MOVIESMOD_PATH = path.join(UEPROJECTNAME, "Content"); // relative to game root, can't be /movies as we need to add pak files too sometimes

export const MOVIES_EXTENSION = ".bk2";
export const PAK_EXTENSIONS = [".pak", ".utoc", ".ucas"];
export const IGNORE_CONFLICTS = ["ue4sslogicmod.info", ".ue4sslogicmod", ".logicmod"];
export const IGNORE_DEPLOY = [path.join('**', 'enabled.txt')];
export const STOP_PATTERNS = ["[^/]*\\.pak$"];
