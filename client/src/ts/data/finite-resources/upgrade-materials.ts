export type FiniteResourceType =
    | "Ancient Dragon Smithing Stone"
    | "Somber Ancient Dragon Smithing Stone"
    | "Great Grave Glovewort" // https://eldenring.wiki.fextralife.com/Great+Grave+Glovewort
    | "Great Ghost Glovewort" // https://eldenring.wiki.fextralife.com/Great+Ghost+Glovewort
    | "Golden Seed" // https://eldenring.wiki.fextralife.com/Golden+Seed
    | "Sacred Tear" // https://eldenring.wiki.fextralife.com/Sacred+Tear
    | "Bell Bearing" // https://eldenring.wiki.fextralife.com/Bell+Bearings

export interface FiniteResource {
    obtained?: boolean
    id: number
    type: FiniteResourceType
    // obtained: boolean
    quest?: string
    location: string
    description: string
    mapLink?: string
    questLink?: string
    unlocks?: string[]
    metadata?: any
}

export type FiniteResourceChecklist = { [key: string]: boolean }

export const UpgradeMaterialsChecklist: FiniteResourceChecklist = {
    // Ancient Dragon Smithing Stones
    "101": false,
    "102": false,
    "103": false,
    "104": false,
    "105": false,
    "106": false,
    "107": false,
    "108": false,
    "109": false,
    "110": false,
    // Somber Ancient Dragon Smithing Stones
    "201": false,
    "202": false,
    "203": false,
    "204": false,
    "205": false,
    "206": false,
    "207": false,
    "208": false,
    // Great Grave Gloveworts
    "301": false,
    "302": false,
    "303": false,
    "304": false,
    "305": false,
    // Great Ghost Gloveworts
    "401": false,
    "402": false,
    "403": false,
    "404": false,
}

export const AncientDragonSmithingStones: FiniteResource[] = [
    {
        id: 101,
        type: "Ancient Dragon Smithing Stone",
        quest: "Nepheli Loux",
        location: "Godrick's Throne Room",
        description: /*html*/`Obtained as a reward for completing <a href="https://eldenring.wiki.fextralife.com/Nepheli+Loux">Nepheli Loux</a>'s questline in Godrick's Throne Room.`,
        questLink: "https://eldenring.wiki.fextralife.com/Nepheli+Loux",
    },
    {
        id: 102,
        type: "Ancient Dragon Smithing Stone",
        quest: "Nepheli Loux",
        location: "Godrick's Throneroom",
        description: /*html*/`Can be purchased for 20,000 Runes from <a href="https://eldenring.wiki.fextralife.com/Gatekeeper+Gostoc">Gatekeeper Gostoc</a> if he is alive as a merchant in Godrick's Throneroom after Nepheli's questline.`,
        questLink: "https://eldenring.wiki.fextralife.com/Nepheli+Loux",
    },
    {
        id: 103,
        type: "Ancient Dragon Smithing Stone",
        quest: "Sorceress Sellen",
        location: "Academy of Raya Lucaria",
        description: /*html*/`Obtained as a reward for siding with Witch-Hunter Jerren during the <a href="https://eldenring.wiki.fextralife.com/Sorceress+Sellen">Sorceress Sellen</a> questline.`,
        questLink: "https://eldenring.wiki.fextralife.com/Sorceress+Sellen",
    },
    {
        id: 104,
        type: "Ancient Dragon Smithing Stone",
        quest: "Gurranq, Beast Clergyman",
        location: "Bestial Sanctum, Caelid",
        description: /*html*/`Given by Gurranq after feeding him 9 Deathroot.<br/>(Alternatively, you can kill Gurranq after killing Maliketh.)`,
        questLink: "https://eldenring.wiki.fextralife.com/Gurranq+Beast+Clergyman",
    },
    {
        id: 105,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Mountaintops of the Giants",
        description: /*html*/`Found on a corpse inside the mouth of a big skull south-east of Church of Repose.<br/>Once you spawn in, turn to the south-east and you will see a large skull.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6399&lat=-91.09&lng=158.80&zoom=8&code=mapA",
    },
    {
        id: 106,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Consecrated Snowfield",
        description: /*html*/`Dropped along with the Night's Cavalry Set by the two mini-boss Night's Cavalry guarding a caravan at night.`,
    },
    {
        id: 107,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Consecrated Snowfield",
        description: /*html*/`Looted from within the Yelough Anix Tunnel located in Consecrated Snowfield.`,
    },
    {
        id: 108,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Consecrated Snowfield",
        description: /*html*/`On a corpse in the frozen waterfall just above Great Wyrm Theodorix.<br/>From Cave of the Forlorn site of grace, go outside, turn left and hug the right side then jump up the ledges to get to the other side.`,
    },
    {
        id: 109,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`Dropped by the Farum Azula Dragon that swoops in to attack as you make your way along the curved platform in the southwest.`,
        mapLink: "https://eldenring.wiki.fextralife.com/interactive+map?id=8612&lat=-129.726562&lng=216.571842&zoom=8&code=mapA",
    },
    {
        id: 110,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`
            Found on a corpse on a floating platform north of the Dragon Temple, guarded by a Beastman.
            <br/>From the north end of the temple, navigate your way through the floating debris to a narrow path laden with dragon statues, at the end of which you will find a spiral staircase on the right.
            <br/>Head up these stairs and then turn towards the south to find a floating pillar adjoining the aforementioned floating platform.
            <br/>Use the pillar to get up to the platform and collect the stone.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/interactive+map?id=4353&lat=-121.78125&lng=215.385414&zoom=8&code=mapA",
    },
    {
        id: 111,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`
            Dropped by the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace.
            <br/>The dragon is constantly raining red lightning around the area.
            <br/>
            <br/>The gazebo behind it also contains a Somber Ancient Dragon Smithing Stone.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/interactive+map?id=8719&lat=-123.476562&lng=219.869885&zoom=8&code=mapA",
    },
    {
        id: 112,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Miquella's Haligtree",
        description: /*html*/`Can be looted on a corpse below a hugging statue in Miquella's Haligtree.<br/>It is guarded by a Lesser Leonine Misbegotten.`,
    },
    {
        id: 113,
        type: "Ancient Dragon Smithing Stone",
        quest: null,
        location: "Miquella's Haligtree",
        description: /*html*/`One can be found in a chest found by advancing in Miquella's Haligtree after defeating Loretta, Knight of the Haligtree.`,
    },

]

export const SomberAncientDragonSmithingStones: FiniteResource[] = [
    {
        id: 201,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: "Latenna",
        location: "not sure, need to look up",
        description: /*html*/`Received from completing <a href="https://eldenring.wiki.fextralife.com/Latenna">Latenna</a>'s quest line upon delivering her to Apostate Derelict.`,
        questLink: "https://eldenring.wiki.fextralife.com/Latenna",
    },
    {
        id: 202,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Dynasty Mausoleum Midpoint",
        description: /*html*/`Found in a chest under the massive statue by the Dynasty Mausoleum Midpoint.`,
    },
    {
        id: 203,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Elphael, Brace of the Haligtree",
        description: /*html*/`
            Found in a chest hidden between columns near a roof with a corpse carrying an item, after the Prayer Room site of Grace in the Haligtree.
            <br/>To reach it, go to the end of the first walkway and jump down to the gazebo with the red scarab, then run up the diagonal support on the other side.
            <br/>The chest is in a small room.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=8299&lat=-36.265625&lng=148.499286&zoom=8&code=mapA",
    },
    {
        id: 204,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Elphael, Brace of the Haligtree",
        description: /*html*/`
            Found on a corpse in the Southern end of the ring walkway in the east, near the patrolling Putrid Avatar.
            <br/>To reach this walkway, head out of the Prayer Room site of grace and jump onto the second buttress (concrete beam) connecting to a tower.
            <br/>Descend the tower and use the ledges on the bottom to reach the ring walkway.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4901&lat=-39.823438&lng=149.869885&zoom=8&code=mapA",
    },
    {
        id: 205,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: "Millicent",
        location: "Elphael, Brace of the Haligtree",
        description: /*html*/`After completing the Millicent questline and defeating Malenia, it can be obtained by inserting the gold needle into Malenia's scarlet flower to receive Miquella's Needle.`,
        questLink: "https://eldenring.wiki.fextralife.com/Millicent",
    },
    {
        id: 206,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Leyndell, Ashen Capital",
        description: /*html*/`
            From the main Leyndell, Capital of Ash Site of Grace, go west, along the dragon.
            <br/>Enter the building past it and climb the ladder.
            <br/>Over the railing to the right is a gargoyle next to a corpse with the stone.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=7715&lat=-103.914062&lng=114.004391&zoom=8&code=mapC",
    },
    {
        id: 207,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`
            Found in a gazebo behind the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace.
            <br/>The dragon is constantly raining red lightning around the area and killing it will also award you an Ancient Dragon Smithing Stone.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/interactive+map?id=4357&lat=-123.476562&lng=220.336526&zoom=8&code=mapA",
    },
    {
        id: 208,
        type: "Somber Ancient Dragon Smithing Stone",
        quest: null,
        location: "Consecrated Snowfield",
        description: /*html*/`
            Dropped by Anastasia, Tarnished-Eater after her third invasion, in the Consecrated Snowfield on the frozen river southwest of Ordina, Liturgical Town.
            <br/><strong>Possible Bug:</strong> Anastasia may not invade if the Putrid Avatar of the Consecrated Snowfield minor Erdtree has been killed.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=7919&lat=-69.203125&lng=137.478198&zoom=8&code=mapA",
    },
]

export const GreatGraveGlovewort: FiniteResource[] = [
    {
        id: 301,
        type: "Great Grave Glovewort",
        quest: null,
        location: "Consecrated Snowfield Catacombs",
        description: /*html*/`Two (2) dropped by the boss of Consecrated Snowfield Catacombs, Putrid Grave Warden Duelist.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3506&lat=-78.89&lng=149.96&zoom=8&code=mapA",
    },
    {
        id: 302,
        type: "Great Grave Glovewort",
        quest: null,
        location: "Giant-Conquering Hero's Grave",
        description: /*html*/`
            In the large hall with the Troll, drop down from either side of the platform into a room with a Prelate.
            <br/>Defeat it and check the very back of the room for the glovewort.
            <br/>
            <br/>Alternatively, you can reach this room by descending the lift and sending it back up.
            <br/>Pull the lever in the alcove to the right and then enter the small space in the raised lift to descend further down.
            <br/>In the next hall, sprint past the Lesser Burial Watchdog and turn left.
            <br/>Climb the ladder at the end of this path.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Giant-Conquering+Hero's+Grave",
    },
    {
        id: 303,
        type: "Great Grave Glovewort",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`
            Found in a recess in the northeastern-most wall of the upper level of the large building next to the Crumbling Beast Grave Depths site of grace.
            <br/>To reach this upper area, head out of the balcony of the room next to the site of grace and jump up onto the red roof right next to it.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/interactive+map?id=8616&lat=-127.710937&lng=213.923397&zoom=8&code=mapA",
    },
    {
        id: 304,
        type: "Great Grave Glovewort",
        quest: null,
        location: "Crumbling Farum Azula",
        description: /*html*/`
            In the heavily-ruined section in the northwest leading to the Dragon Temple site of grace, there is a pit you can drop down into to reach a narrow hallway below.
            <br/>From here, head into the first archway on the left and up the stairs heading northwest to a ruined balcony where you can navigate across a series of floating debris to reach a second balcony with a ladder.
            <br/>Head up the ladder to reach a hidden tomb with the glovewort sitting on the main sarcophagus in the back.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6066&lat=-125.5&lng=212.59375&zoom=8&code=mapA",
    },
    {
        id: 305,
        type: "Great Grave Glovewort",
        quest: null,
        location: "Elphael, Brace of the Haligtree",
        description: /*html*/`
            Found in the center of the second lake of rot, past a second set of branches within the inner walls.
            <br/>Beware the Ulcerated Tree Spirit (non-boss) lurking beneath.
        `,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5363&lat=-39.534376&lng=147.278103&zoom=8&code=mapA",
    },
]

export const GreatGhostGlovewort: FiniteResource[] = [
    {
        id: 401,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Ainsel River",
        description: /*html*/`Can be obtained from a chest in a room underneath the massive skeleton and throne at Ainsel River, near the Dragonkin Soldier of Nokstella site of grace.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1408&lat=-123.585937&lng=63.293324&zoom=8&code=mapB",
    },
    {
        id: 402,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Night's Sacred Ground",
        description: /*html*/`Found in a chest under the massive skeleton statue in Night's Sacred Ground.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1957&lat=-181.10937&lng=129.1905&zoom=8&code=mapB",
    },
    {
        id: 403,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Nokstella, Eternal City",
        description: /*html*/`Found in a chest at the back of a narrow room in Nokstella, Eternal City.<br/>Beware the Silver Tear disguised as a large iron ball hanging off of the ceiling waiting to ambush you.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2755&lat=-121.08438&lng=65.86085&zoom=8&code=mapB",
    },
    {
        id: 404,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Mohgwyn Dynasty Mausoleum",
        description: /*html*/`In the cave-like room preceding the Dynasty Mausoleum Midpoint site of grace, in a lower section filled with walking corpses.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+map?id=4675&lat=-182.601562&lng=146.674613&zoom=8&code=mapB",
    },
]


export const BellBearings: FiniteResource[] = [
    {
        id: 501,
        type: "Bell Bearing",
        quest: null,
        location: "Ainsel River",
        description: /*html*/`Can be obtained from a chest in a room underneath the massive skeleton and throne at Ainsel River, near the Dragonkin Soldier of Nokstella site of grace.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1408&lat=-123.585937&lng=63.293324&zoom=8&code=mapB",
    },
    {
        id: 402,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Night's Sacred Ground",
        description: /*html*/`Found in a chest under the massive skeleton statue in Night's Sacred Ground.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1957&lat=-181.10937&lng=129.1905&zoom=8&code=mapB",
    },
    {
        id: 403,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Nokstella, Eternal City",
        description: /*html*/`Found in a chest at the back of a narrow room in Nokstella, Eternal City.<br/>Beware the Silver Tear disguised as a large iron ball hanging off of the ceiling waiting to ambush you.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2755&lat=-121.08438&lng=65.86085&zoom=8&code=mapB",
    },
    {
        id: 404,
        type: "Great Ghost Glovewort",
        quest: null,
        location: "Mohgwyn Dynasty Mausoleum",
        description: /*html*/`In the cave-like room preceding the Dynasty Mausoleum Midpoint site of grace, in a lower section filled with walking corpses.`,
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+map?id=4675&lat=-182.601562&lng=146.674613&zoom=8&code=mapB",
    },
]

export const FiniteResources: FiniteResource[] = [
    ...AncientDragonSmithingStones,
    ...SomberAncientDragonSmithingStones,
    ...GreatGraveGlovewort,
    ...GreatGhostGlovewort,
]
