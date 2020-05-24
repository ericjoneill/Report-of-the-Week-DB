import { insertAfter } from '../components/insertAfter.js'
import { newReportElem } from '../components/newReportElem.js'
import { clearList } from './clearList.js'
import { clearValue } from '../search/clearValue.js'

/** @function setList Given clicked categoryEl, adds respective reviews as nodes */
export const setList = (categoryEl, categories, reports) => {
    /**
     * 
     * @param  {function} clearList Clears list of reviews
     * @param  {Array} clickedCategoryList Sets list given respective category tab
     * @param  {function} insertAfter Inserts node after given reference node
     * @param  {function} newReportElem Creating a list node for each review in clickedCategoryList during for loop
     */

    clearList(document.querySelectorAll("a.panel-block"))
    clearValue()

    const clickedCategoryList = categoryEl.id === 'All' ? Object.values(reports) : 
                                categories.filter(cat => cat[0].replace(/ +?/g, '') === categoryEl.id)[0]

    clickedCategoryList.forEach((report, i) => {
        i === 0 ? null : typeof report.product != 'undefined' ? 
                         insertAfter(newReportElem(report.product, report.category, report.videoTitle, report.rating, report.videoCode, report.manufacturer), 
                         document.querySelector('.report-list')) : null
    })

}