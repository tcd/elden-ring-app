export const getElementByClassName = (className: string): Element | null => {
    const elements = document.getElementsByClassName(className)
    if (!(elements.length > 0)) {
        return null
    }
    return elements[0]
}
