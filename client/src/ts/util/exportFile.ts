export interface ExportJsonToFileOptions {
    data: object
    fileName: string
}

/**
 * Prompt a file download for the user.
 */
export const exportJsonToFile = (options: ExportJsonToFileOptions): void => {
    const jsonString = JSON.stringify(options.data, null, 4)
    const jsonBlob = new Blob([jsonString], { type: "application/json;charset=utf-8;" })
    const jsonUrl = URL.createObjectURL(jsonBlob)

    const a = document.createElement("a")
    a.style.display = "none"
    a.href = jsonUrl
    a.download = options.fileName
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(a.href)
    a.remove()

    return null
}
