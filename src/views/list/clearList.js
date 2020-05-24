/** @function clearList Given an array, removes all elements. List of reviews in this case */
export const clearList = (list) => {
    list.forEach(el => el.remove())
}