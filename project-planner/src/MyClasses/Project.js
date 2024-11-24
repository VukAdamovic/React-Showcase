let id = 1;

export default class Project {
    constructor(title, desc, date) {
        this.id = id++;
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.tasks = [];
    }
}