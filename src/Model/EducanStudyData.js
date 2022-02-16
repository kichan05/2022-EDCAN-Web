export class EducanStudyData{
    constructor(title, unit, tags, description){
        this.title = title
        this.unit = unit
        this.tags = tags
        this.description = description
    }
}

export class EducanStudyTag{
    constructor(tagName, bgColor) {
        this.tagName = tagName
        this.bgColor = bgColor
    }
}