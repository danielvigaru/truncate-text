/**
 * Returns the position of the last space in the string that's before the given index
 * @param text {String} The text that will be searched
 * @param index {Number} Searches for last space before this index
 * @returns {Number} The position of the space
 */

export default function getPositionOfLastSpaceBeforeIndex(text: string, index: number): number {
    return text.slice(0, index).lastIndexOf(" ");
}
