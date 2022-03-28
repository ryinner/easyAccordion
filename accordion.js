const accordionControllBtns = document.querySelectorAll('.accordion__title')

accordionControllBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const accordionBodys = document.querySelectorAll('.accordion__body')

        const ACCORDION_TITLE_ACTIVE = 'accordion__title__active'
        const ACCORDION_BODY_ACTIVE = 'accordion__body__active'

        removeAllActive (accordionControllBtns, ACCORDION_TITLE_ACTIVE)
        removeAllActive (accordionBodys, ACCORDION_BODY_ACTIVE)

        btn.classList.add(ACCORDION_TITLE_ACTIVE)
        btn.parentElement.children[1].classList.add(ACCORDION_BODY_ACTIVE)
    })
})

function removeAllActive (items, className) {
    items.forEach((item) => {
        item.classList.remove(className)
    })
}