/** @function resetFilters Sorts alphabetically, then reverses due to how we print reports to the DOM */
export const sortList = (list) => {
        return list.sort(function(a, b){
            if (a.product < b.product) return -1
            if (a.product > b.product) return 1
            return 0;
        }).reverse()

}