import type { BuildData } from "@app/types"

import { isBlank } from "./helpers/is-blank"

export const isBuildData = (input: any): input is BuildData => {
    return !isBlank(input?.startingClass)
    //
    // let score = 0
    //
    // if (!isBlank(input?.startingClass)) { score++ } // 1
    // if (!isBlank(input?.attributes))    { score++ } // 2
    // if (!isBlank(input?.armor))         { score++ } // 3
    // if (!isBlank(input?.weapons))       { score++ } // 4
    // if (!isBlank(input?.talismans))     { score++ } // 5
    // if (!isBlank(input?.ammunition))    { score++ }
    // if (!isBlank(input?.checklist))     { score++ }
    // if (!isBlank(input?.quickItems))    { score++ }
    // if (!isBlank(input?.spells))        { score++ }
    //
    // return score >= 5
}
