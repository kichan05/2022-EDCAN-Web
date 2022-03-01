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
        appendPortfolio(state, portfolioData){
            state.portfolioList.push(portfolioData)
        },
        adminLogin(state, inputPassword){
            state.isAdmin = inputPassword == "edcan123@"
        }
    },
    actions : {
        async getAllPortfolio(context){
            context
            const portfolioSnapshot = await getDocs(collection(db, "portfolio"));
            portfolioSnapshot.forEach(doc => {
                const data = doc.data()
                let portfolioDoc = new PortfolioData()
                portfolioDoc.fromFirestore(data)
                // console.log(portfolioDoc);
                context.commit("appendPortfolio", portfolioDoc)
            });
        }
    }
})

export default store