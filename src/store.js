import { createStore } from "vuex";
import { db } from "./assets/firebase.js"
import { collection, getDocs } from "firebase/firestore";

import { PortfolioData } from "./Model/PortfolioData.js"

const store = createStore({
    state(){return {
        portfolioList : [],
        isAdmin : false,
    }},
    mutations : {
        clearPortfolioList(state){
            // alert("리셋")
            state.portfolioList = []
        },
        appendPortfolio(state, portfolioData){
            state.portfolioList.push(portfolioData)
        },
        adminLogin(state, inputPassword){
            state.isAdmin = inputPassword == "edcan123@"
        }
    },
    actions : {
        async getAllPortfolio(context){
            // alert("가져오기 실행")
            context.commit("clearPortfolioList")
            
            const portfolioSnapshot = await getDocs(collection(db, "portfolio"));
            // alert("가져옴")
            portfolioSnapshot.forEach(doc => {
                // alert("넣음")
                const data = doc.data()
                let portfolioDoc = new PortfolioData()
                portfolioDoc.fromFirestore(data)
                // console.log(portfolioDoc);
                context.commit("appendPortfolio", portfolioDoc)
            });
            // alert("끝남")
        },
    }
})

export default store