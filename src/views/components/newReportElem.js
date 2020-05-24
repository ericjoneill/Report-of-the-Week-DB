/** @function newReportElem called each time a key is pressed, re-sorts the list depending on input value */
export const newReportElem = (product, category, videoTitle, rating, videoCode, manufacturer) => {
    var reportElem = document.createElement('a')
    // adds class needed for formatting to work properly
    reportElem.classList.add('panel-block')
    // adds variety of dynamic attributes that we can play with later
    reportElem.setAttribute('data-product',`${product}`)
    reportElem.setAttribute('data-cat',`${category}`)
    reportElem.setAttribute('data-title',`${videoTitle}`)
    reportElem.setAttribute('data-rating',`${typeof rating === 'undefined' ? 'N/A' : rating}`)
    reportElem.setAttribute('data-src',`${videoCode}`)
    reportElem.setAttribute('data-manufacturer',`${manufacturer}`)

    reportElem.innerHTML = `<span class="panel-icon"></span><span>${product} - ${manufacturer}`

    return reportElem
}