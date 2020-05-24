import { clearValue } from "../search/clearValue";

/** @function resetFilters Resets list of reviews, search input, and removes is-active from any elements */
export const resetFilters = () => {

    /**
	 * @param  {function} clearValue Clears search input value
	 */

    document.querySelectorAll("a.panel-block").forEach(el => el.remove())

    document.querySelectorAll('.panel-tabs > a').forEach(a => {
        a.classList.remove('is-active')
    })

    clearValue()

}