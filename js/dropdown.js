import { elements } from './elements.js'

export function dropdown(){
elements.choosCity.addEventListener('click',()=>{
    elements.cityList.classList.toggle('open')
})
}
