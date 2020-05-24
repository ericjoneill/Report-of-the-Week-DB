/** @function keyPress called each time a key is pressed, re-sorts the list depending on input value */
export const keyPress = () => {
    let search, filter, reportList, i, innerText;
    search = document.querySelector(".input");
    filter = search.value.toUpperCase();
    reportList = document.querySelectorAll('a.panel-block')
    for (i = 0; i < reportList.length; i++) {
        innerText = reportList[i].innerText;
        if (innerText.toUpperCase().indexOf(filter) > -1) {
            reportList[i].style.display = "";
        } else {
            reportList[i].style.display = "none";
        }
    }
}