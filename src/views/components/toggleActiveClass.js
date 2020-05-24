/** @function toggleActiveClass Depending on clicked elem, adds is-active and removes from any others */
export const toggleActiveClass = (toggledEl) => {

    // cheks which elem is-active and removes, then appends the right one
    document.querySelectorAll('.control > button').forEach(a => {
        a === toggledEl ? a.classList.add('is-active') :
        a.classList.remove('is-active')
    })
}