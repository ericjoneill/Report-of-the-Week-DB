/** @function createModal Once called, appends modal with all info related to the clicked review before showing it with is-active class */
export const createModal = () => {
    const initModal = function(){
        
        // formating our rating value
        var roundedRating = this.getAttribute("data-rating").indexOf('N/A') === -1 ? parseInt(Math.round((parseInt(this.getAttribute("data-rating")) * 100) / 100).toFixed(1).replace(".", "")) : false
        
        // if user clicks close button, hide modal
        document.querySelector('.close-modal').addEventListener("click", function(){ document.querySelector('.modal').classList.remove('is-active')});

        // shirnk title depending on length
        document.querySelector('.modal-card-title').innerText = this.getAttribute("data-cat")

        // elseIf for modal body depending on rating number
        document.querySelector('.modal-card-body').innerText = `In this report of the week, entitled "${this.getAttribute("data-title")}", Review Brah reviews the ${this.getAttribute("data-product")}, brought to us by the minds behind ${this.getAttribute("data-manufacturer")}.\n\n` + `${roundedRating ? roundedRating >= 80 ? `It wouldn't come as a shock if Review Brah had an additional ${this.getAttribute("data-product")} off-camera, rating this one over ${roundedRating}% on YouTube. ` : roundedRating >= 60 ? `While stating his issues with the ${this.getAttribute("data-product")}, Review Brah wasn't hard pressed to give a compliment or two, giving it a ${roundedRating}% on YouTube. ` : roundedRating >= 40 ? `${this.getAttribute("data-manufacturer")} should be concerned after this one, where Review Brah rated their ${this.getAttribute("data-product")} a mediocre ${roundedRating}% on YouTube. ` : roundedRating >= 0 ? `It's safe to say this review was a PR nightmare for ${this.getAttribute("data-manufacturer")}, with Review Brah dawning their ${this.getAttribute("data-product")} a dysmal ${roundedRating}% on YouTube. ` : `` : ``}` + `Discover more about this ${(this.getAttribute("data-cat").indexOf('eview') > -1 ? this.getAttribute("data-cat") : `${this.getAttribute("data-cat")} review`)} via the link below.`

        // set youtube link with data-src
        document.querySelector('.modal-link').setAttribute('href',`https://www.youtube.com/watch?v=${this.getAttribute("data-src")}`)
        document.querySelector('.modal-link').setAttribute('target',`_blank`) 

        // shows modal, due to all above info ready
        document.querySelector('.modal').classList.add('is-active')
    };

    /**
     * The below listener appends all report elements at a given moment with above initModal function, 
     * preparing it with data before it finally adds is-active class to modal, displaying it to the user
     */

    for (var i = 0; i < document.querySelectorAll('a.panel-block').length; i++) {
        document.querySelectorAll('a.panel-block')[i].addEventListener('click', initModal, false);
    }

}