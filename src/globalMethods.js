const methods = {
    at(){
        const JIWON_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSes0ojiAtqquJKtCnahb9Q1UI7cb14BxxjcZN_oIgvm0Iq7bg/viewform?usp=sf_link"
        const NOW_DATE = new Date()

        if(NOW_DATE.getMonth() == 2 && 9 <= NOW_DATE.getDate() && NOW_DATE.getDate() <= 15 ){
            window.open(JIWON_FORM_URL)
        }
        else{
            alert("지원 기간이 아닙니다.")
        }

    },
    px(){
        const JIWON_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwNEonbEfMK3JszKwRAkFBz_kTRWI4lesR6wJC-KVoJKSD5g/viewform?usp=sf_link"
        const NOW_DATE = new Date()

        if(NOW_DATE.getMonth() == 2 && 11 <= NOW_DATE.getDate() && NOW_DATE.getDate() <= 13 ){
            window.open(JIWON_FORM_URL)
        }
        else{
            alert("지원 기간이 아닙니다.")
        }

    },
}

export default {
    install(Vue){
        Vue.config.globalProperties.$gotoJiwonAt = methods.at
        Vue.config.globalProperties.$gotoJiwonPx = methods.px
    }
}