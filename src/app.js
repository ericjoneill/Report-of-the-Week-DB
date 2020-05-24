import 'bulma/css/bulma.css'
import { waitForJSON } from './views/request/waitForJSON.js'
import { sortList } from './views/list/sortList.js'
import { compileList } from './views/list/compileList.js'
import { setList } from './views/list/setList.js'
import { keyPress } from './views/search/keyPress.js'
import { resetFilters } from './views/components/resetFilters'
import { toggleActiveClass } from './views/components/toggleActiveClass.js';
import { createModal } from './views/modal/createModal.js'
import { scrollToTop } from './views/components/scrollToTop.js'

let categoryList = [], reports;

export const app = () => {
    waitForJSON().then(function (json) {
        // then was resolved, disables spinner
        document.querySelector('#All').classList.remove('is-loading')
        
        // Sorts list alphabetically instead of raw JSON order
        reports = sortList(Object.values(json.reports))

        // Initializes all of our sorted & compiled report of the week categories
        categoryList = compileList(reports, categoryList)

        // Updates DOM with list of all reports as the default
        setList(document.getElementById(`All`), categoryList, reports)

        // Setting a listener to each report element, to set modal info once clicked
        createModal()

        // listeners below, depending on how user interacts with tabs/search input

        document.getElementById(`All`).addEventListener("click", function(){ setList(this, categoryList, reports), createModal() }, false);
        document.querySelector(`.reset-all`).addEventListener("click", function(){ resetFilters(), setList(document.getElementById(`All`), categoryList, reports), createModal(), scrollToTop() }, false);
        document.querySelector(`.back-to-top`).addEventListener("click", function(){ scrollToTop() }, false);
        document.querySelector('input').addEventListener("keyup", function(){ keyPress(this) });
        document.getElementById(`All`).addEventListener("click", function(){ toggleActiveClass(this) });

        // sorting through all categories and adding a listener to them regarding the is-active class in tabs

        categoryList.forEach(categoryName => {
            document.getElementById(`${categoryName[0].replace(/ +?/g, '')}`).addEventListener("click", function(){ toggleActiveClass(this) });
        })

        categoryList.forEach(categoryName => {
            document.getElementById(`${categoryName[0].replace(/ +?/g, '')}`).addEventListener("click", function(){ setList(this, categoryList, reports), createModal() }, false);
        })

        /**
         * 
         * It was a pleasure to discover this api via the email you sent with the open source
         * API git repo. I spent more time on it than was asked, and I intend to improve 
         * this project to my hearts content.
         * 
         * 
         *  Thank you for the test, it was a lot of fun. Long live Review Brah. ❤️
         * 
         *  */


    })
}