/** @function compileList Returns array with organized JSON data */
export const compileList = (reports, categoryList) => {
    /**
	 * 
	 * @param  {JSON} reports
     * @param  {Array} categoryList 
	 * @return {Array} Returns the categoryList array 
     *                 with data from the reports JSON         
	 */

    Object.values(reports).forEach((r, i) => {
        // console.log(r)
        categoryList.indexOf(r.category) === -1 ? categoryList.push(r.category) : null
    })

    categoryList.indexOf(undefined) > -1 ? 
    categoryList.splice(categoryList.indexOf(undefined), 1) : null

    categoryList = Array.from(categoryList, x => [x])

    for (let i = 1; (Object.keys(reports).length - 1) > i; i++) {
        typeof reports[i] == 'undefined' ? i++ : null
        // console.log(Object.keys(reports)[i])
        categoryList.forEach((cat) => {
            cat[0].indexOf(reports[i].category) > -1 ? cat.push(reports[i]) : null
        })
    }
    
    // creating our tabs and adding an ID using regex to create a valid id value

    categoryList.forEach((categoryName) => {
        document.querySelector('.is-grouped-multiline').innerHTML += `<p style="margin-bottom: 0.25rem; margin-right: 0.25rem;" class="control"> <a style="font-size: 0.85rem;" class="button is-info is-small is-outlined is-rounded" id="${categoryName[0].replace(/ +?/g, '')}">${categoryName[0]}</a></p>`
    })
    
    return categoryList
}