export class PortfolioData{
    constructor(title, description, unit, img){
        // if(!(title && description && unit && img)) return
        this.title = title
        this.description = description
        this.unit = unit
        this.img = img
    }

    fromFirestore(data){
        this.title = data.title
        this.description = data.description
        this.unit = data.unit
        this.img = data.img
    }
}