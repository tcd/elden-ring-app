export interface ExportImageToFileOptions {
    /** Base64 encoded image. */
    dataUri: string
    fileName: string
}

/**
 * Prompt a file download for the user.
 */
export const exportImageToFile = async (options: ExportImageToFileOptions): Promise<void> => {
    if (!options?.dataUri?.startsWith("data:image")) {
        throw new Error("[exportImageToFile] invalid options passed")
    }

    const a = document.createElement("a")
    a.style.display = "none"
    a.href = options.dataUri
    a.download = options.fileName
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(a.href)
    a.remove()

    return null
}
