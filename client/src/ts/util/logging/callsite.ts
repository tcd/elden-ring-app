import { CONFIG } from "@app/config"

// import callerCallsite from "caller-callsite"
import callsites, { CallSite } from "callsites"
// import * as sourceMapSupport from "source-map-support"


export const getCallsite =  () => {
    if (CONFIG.production()) {
        return null
    }
    // return callerCallsite().getFileName()
    const sites = callsites().map(x => x.getFunctionName())
    const callsite = callsites()[3]
    // const callsite = sourceMapSupport.wrapCallSite(jsCallsite)
    // debugger
    // return [
    //     callsite.getFileName(),
    //     callsite.getFunctionName(),
    //     callsite.getThis(),
    // ].join(":") + " "
    return callCallsiteMethods(callsite)
}

export const getCallingFunction =  () => {
    if (CONFIG.production()) {
        return null
    }
    const callsite = callsites()[3]
    return callsite.getFunctionName()
}

const callCallsiteMethods = (callsite: CallSite): any => {
    return {
        getThis:         callsite.getThis(),
        getTypeName:     callsite.getTypeName(),
        getFunction:     callsite.getFunction(),
        getFunctionName: callsite.getFunctionName(),
        getMethodName:   callsite.getMethodName(),
        getFileName:     callsite.getFileName(),
        getLineNumber:   callsite.getLineNumber(),
        getColumnNumber: callsite.getColumnNumber(),
        getEvalOrigin:   callsite.getEvalOrigin(),
        isToplevel:      callsite.isToplevel(),
        isEval:          callsite.isEval(),
        isNative:        callsite.isNative(),
        isConstructor:   callsite.isConstructor(),
    }
}
