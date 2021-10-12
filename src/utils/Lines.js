export const lastLine = (lines) => {
    let lineList = lines.split('\n')
    return lineList[lineList.length - 1]
}
