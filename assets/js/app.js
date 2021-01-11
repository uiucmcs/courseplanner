var course_data = {
    "requirements": {
        "total": {
            "required": 8,
            "minimum_credit": 32
        },
        "req": [
            {
                "name": "Breadth Requirements",
                "required": 4,
                "minimum_credit": 16,
                "categories": [
                    {
                        "id": "brd-1",
                        "name": "Artificial Intelligence",
                        "ds": true
                    },
                    {
                        "id": "brd-2",
                        "name": "Database & Information Systems",
                        "ds": true
                    },
                    {
                        "id": "brd-3",
                        "name": "Interactive Computing (Graphics/HCI)",
                        "ds": true
                    },
                    {
                        "id": "brd-7",
                        "name": "Systems & Networking",
                        "ds": true
                    },
                    {
                        "id": "brd-4",
                        "name": "Parallel Computing",
                        "ds": false
                    },
                    {
                        "id": "brd-6",
                        "name": "Scientific Computing",
                        "ds": false
                    },
                    {
                        "id": "brd-5",
                        "name": "Programming Languages & Software Engineering",
                        "ds": false
                    }
                ]
            },
            {
                "name": "Advanced Coursework",
                "required": 1,
                "minimum_credit": 12,
                "categories": [
                    {
                        "id": "adv-1",
                        "name": "Advanced Coursework"
                    }
                ]
            },
            {
                "name": "Additional Coursework",
                "required": 0,
                "minimum_credit": 0,
                "categories": [
                    {
                        "id": "add-1",
                        "name": "Additional Coursework"
                    }
                ]
            }
        ]
    },
    "courses": [
        {
            "id": "aml",
            "code": "CS 498",
            "name": "Applied Machine Learning",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-1"
            ]
        },
        {
            "id": "cph",
            "code": "CS 445",
            "name": "Computational Photography",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-1",
                "brd-3"
            ]
        },
        {
            "id": "dlh",
            "code": "CS 598",
            "name": "Deep Learning for Healthcare",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-1",
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 0,
                "courses": {
                    "mandatory": [],
                    "optional": [
                        "aml"
                    ]
                }
            }
        },
        {
            "id": "tis",
            "code": "CS 410",
            "name": "Text Information Systems",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-2"
            ]
        },
        {
            "id": "dbs",
            "code": "CS 411",
            "name": "Database Systems",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-2"
            ]
        },
        {
            "id": "idm",
            "code": "CS 412",
            "name": "Introduction to Data Mining",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-2"
            ]
        },
        {
            "id": "icg",
            "code": "CS 418",
            "name": "Interactive Computer Graphics",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-3"
            ]
        },
        {
            "id": "dvz",
            "code": "CS 498",
            "name": "Data Visualization",
            "semester": [
                "summer"
            ],
            "category": [
                "brd-3"
            ]
        },
        {
            "id": "svz",
            "code": "CS 519",
            "name": "Scientific Visualization",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-3",
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 0,
                "courses": {
                    "mandatory": [],
                    "optional": [
                        "icg",
                        "dvz"
                    ]
                }
            }
        },
        {
            "id": "prp",
            "code": "CS 484",
            "name": "Parallel Programming",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-4"
            ]
        },
        {
            "id": "plc",
            "code": "CS 421",
            "name": "Programming Languages and Compilers",
            "semester": [
                "summer"
            ],
            "category": [
                "brd-5"
            ]
        },
        {
            "id": "swi",
            "code": "CS 427",
            "name": "Software Engineering I",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-5"
            ]
        },
        {
            "id": "nma",
            "code": "CS 450",
            "name": "Numerical Analysis",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-6"
            ]
        },
        {
            "id": "dst",
            "code": "CS 425",
            "name": "Distributed Systems",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-7"
            ]
        },
        {
            "id": "cca",
            "code": "CS 498",
            "name": "Cloud Computing Applications",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-7"
            ]
        },
        {
            "id": "cnt",
            "code": "CS 498",
            "name": "Cloud Networking",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-7"
            ]
        },
        {
            "id": "iot",
            "code": "CS 498",
            "name": "Internet of Things",
            "semester": [
                "spring"
            ],
            "category": [
                "brd-7"
            ]
        },
        {
            "id": "tpd",
            "code": "CS 513",
            "name": "Theory and Practice of Data Cleaning",
            "semester": [
                "summer"
            ],
            "category": [
                "adv-1"
            ]
        },
        {
            "id": "fdc",
            "code": "CS 598",
            "name": "Foundations of Data Curation",
            "semester": [
                "fall"
            ],
            "category": [
                "adv-1"
            ]
        },
        {
            "id": "psl",
            "code": "CS 598",
            "name": "Practical Statistical Learning",
            "semester": [
                "fall",
                "spring"
            ],
            "category": [
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 1,
                "courses": {
                    "mandatory": [],
                    "optional": [
                        "tis",
                        "idm",
                        "mas",
                        "aml",
                        "cph",
                        "dlh"
                    ]
                }
            }
        },
        {
            "id": "adm",
            "code": "CS 598",
            "name": "Advanced Bayesian Modeling",
            "semester": [
                "spring"
            ],
            "category": [
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 0,
                "courses": {
                    "mandatory": [],
                    "optional": [
                        "mas"
                    ]
                }
            }
        },
        {
            "id": "ccc",
            "code": "CS 598",
            "name": "Cloud Computing Capstone",
            "semester": [
                "summer"
            ],
            "category": [
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 2,
                "courses": {
                    "mandatory": [
                        "cca"
                    ],
                    "optional": [
                        "dst",
                        "cnt",
                        "iot"
                    ]
                }
            }
        },
        {
            "id": "dmc",
            "code": "CS 598",
            "name": "Data Mining Capstone",
            "semester": [
                "summer"
            ],
            "category": [
                "adv-1"
            ],
            "prerequisite": {
                "minimum": 2,
                "courses": {
                    "mandatory": [
                        "tis",
                        "idm"
                    ],
                    "optional": []
                }
            }
        },
        {
            "id": "mas",
            "code": "STAT 420",
            "name": "Methods of Applied Statistics",
            "semester": [
                "summer"
            ],
            "category": [
                "add-1"
            ]
        }
    ]
};

Vue.component('v-select', VueSelect.VueSelect);

var app = new Vue({
    el: '#app',
    data: {
        all: course_data,
        perCredit: 4,
        totalBoxes: 9,
        categories: [],
        selected: [],
        prereq: {
            mandatory: [],
            optional: [],
            on: false
        },
        start: {
            semester: "fall",
            year: 2021
        },
        selectedCourse: "",
        selectionBoxes: []
    },
    created() {
        this.getCoursesForOptions()
        this.getSelectionBoxes()
        this.getCategories()
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    computed: {
        calculation() {
            // initialize
            var color = {
                "ok": "calc-color-ok",
                "notok": "calc-color-notok",
                "empty": ""
            }
            var calc = {
                "total": 0,
                "color": "",
                "categories": []
            }
            var required = []
            for (var i = 0; i < this.all.requirements.req.length; i++) {
                calc.categories.push({
                    "total": 0,
                    "color": ""
                })
                required.push({
                    "categories": []
                })
            }

            // calculate
            var all_condition = []
            for (var i = 0; i < this.selected.length; i++) {
                var c = this.getCategoryForACourse(this.selected[i])
                calc.total += this.perCredit
                calc.categories[c.parent].total += this.perCredit
                if (!required[c.parent].categories.includes(c.id)) {
                    required[c.parent].categories.push(c.id)
                }
                if (required[c.parent].categories.length >= this.all.requirements.req[c.parent].required && calc.categories[c.parent].total >= this.all.requirements.req[c.parent].minimum_credit) {
                    calc.categories[c.parent].color = color.ok
                    all_condition[c.parent] = true
                } else {
                    calc.categories[c.parent].color = color.notok
                    all_condition[c.parent] = false
                }
            }

            if (this.selected.length >= 1) {
                if (all_condition.includes(false)) {
                    calc.color = color.notok
                } else {
                    calc.color = color.ok
                }
            }

            return calc
        }
    },
    watch: {
        "start.semester": function (newStart, oldStart) {
            this.getSelectionBoxes()
        },
        "start.year": function (newStart, oldStart) {
            this.getSelectionBoxes()
        }
    },
    methods: {
        getCategories() {
            for (var i = 0; i < this.all.requirements.req.length; i++) {
                var r = this.all.requirements.req[i]
                for (var j = 0; j < r.categories.length; j++) {
                    var cat = {
                        "id": r.categories[j].id,
                        "name": r.categories[j].name,
                        "ds": false,
                        "type": i
                    }
                    if (r.categories[j].ds) {
                        cat.ds = true
                    }
                    this.categories.push(cat)
                }
            }
        },
        getCategoryForACourse(id) {
            var cat = {}
            var c = this.getCourse(id)
            for (var i = 0; i < this.categories.length; i++) {
                if (c.category.includes(this.categories[i].id)) {
                    cat = {
                        "id": this.categories[i].id,
                        "parent": this.categories[i].type
                    }
                }
            }
            return cat
        },
        getCategoryCourses(id) {
            return this.all.courses.filter(course => {
                return course.category.includes(id)
            })
        },
        getSemesterCourses(sem) {
            return this.all.courses.filter(course => {
                return course.semester.includes(sem)
            })
        },
        getSemesterIcons(sem) {
            switch (sem) {
                case "spring":
                    return {
                        "color": "#f08913", "icon": "fa-cloud-sun"
                    };
                case "summer":
                    return {
                        "color": "#ffcc00", "icon": "fa-sun"
                    };
                case "fall":
                    return {
                        "color": "#13d3f0", "icon": "fa-leaf"
                    };
                default:
                    break;
            }
        },
        getCoursesForOptions() {
            var c = []
            for (var i = 0; i < this.all.courses.length; i++) {
                let k = this.all.courses[i]
                if (!this.selected.includes(k.id)) {
                    var ob = {
                        "label": k.code + " " + k.name,
                        "code": k.id,
                        "selected": false
                    }
                    c.push(ob)
                }
            }
            return c
        },
        getSemesterOptions() {
            return [{
                    "label": "Fall",
                    "code": "fall"
                },
                {
                    "label": "Spring",
                    "code": "spring"
                },
                {
                    "label": "Summer",
                    "code": "summer"
                }
            ]
        },
        getYearOptions() {
            var c = []
            for (var i = 2011; i < 2022; i++) {
                var ob = {
                    "label": i.toString(),
                    "code": i
                }
                c.push(ob)
            }
            return c
        },
        getCourse(id) {
            for (var i = 0; i < this.all.courses.length; i++) {
                let k = this.all.courses[i]
                if (k.id == id) return k
            }
            return {}
        },
        checkPreReq(id) {
            if (this.prereq.on) {
                this.prereq.on = false
                this.prereq.mandatory.splice(0, this.prereq.mandatory.length)
                this.prereq.optional.splice(0, this.prereq.optional.length)
            } else {
                var c = this.getCourse(id)
                if (c.prerequisite) {
                    this.prereq.on = true
                    this.prereq.mandatory.push(...c.prerequisite.courses.mandatory)
                    this.prereq.optional.push(...c.prerequisite.courses.optional)
                }
            }
        },
        getSelectionBoxes() {
            var sems = ["spring", "summer", "fall"]
            var index = sems.indexOf(this.start.semester)
            var year = this.start.year
            this.selectionBoxes.splice(0, this.selectionBoxes.length)
            for (var i = 0; i < this.totalBoxes; i++, index++) {
                if (index % 3 == 0) {
                    year++
                }
                var sem = sems[index % 3]
                var l = {
                    "name": sem.charAt(0).toUpperCase() + sem.slice(1) + " " + year.toString(),
                    "semester": sem,
                    "courses": []
                }
                this.selectionBoxes.push(l)
                this.selected.splice(0, this.selected.length)
            }
        },
        checkPreReqSem(man, opt, min) {
            var mCount = man.length,
                oCount = min - mCount
            for (var i = 0; i < this.selectionBoxes.length; i++) {
                var b = this.selectionBoxes[i]
                for (var j = 0; j < b.courses.length; j++) {
                    var c = b.courses[j]
                    if (man.includes(c.id)) {
                        mCount--
                    } else if (opt.includes(c.id)) {
                        oCount--
                    }
                }
                if (mCount == 0 && oCount == 0) {
                    return i
                }
            }
            return -1
        },
        addCourse(index, sem) {
            if (this.selectedCourse && this.selectedCourse.length > 0) {
                var c = this.getCourse(this.selectedCourse)
                // check semester availability
                if (!c.semester.includes(sem)) {
                    var text = c.code + " " + c.name + " is usually not offerred in the " + sem +
                        " semester. Generally offerred in " + c.semester.join(", ") + " semester(s)."
                    this.$swal("Unavailable", text, "warning")
                    return
                }
                // check pre-requisite
                if (c.prerequisite && c.prerequisite.minimum > 0) {
                    var mCount = 0,
                        oCount = 0
                    for (var i = 0; i < this.selected.length; i++) {
                        if (c.prerequisite.courses.mandatory.includes(this.selected[i])) {
                            mCount++
                        } else if (c.prerequisite.courses.optional.includes(this.selected[i])) {
                            oCount++
                        }
                    }
                    if (mCount < c.prerequisite.courses.mandatory.length || mCount + oCount < c.prerequisite.minimum) {
                        var text = c.code + " " + c.name + " has pre-requisite(s)."
                        var temp = []
                        if (c.prerequisite.courses.mandatory.length > 0) {
                            text += " Must complete: "
                            for (var i = 0; i < c.prerequisite.courses.mandatory.length; i++) {
                                var crs = this.getCourse(c.prerequisite.courses.mandatory[i])
                                temp.push(crs.code + " " + crs.name)
                            }
                            if (temp.length > 0) {
                                text += temp.join(", ")
                                text += "."
                                temp.splice(0, temp.length)
                            }
                        }
                        if (c.prerequisite.courses.mandatory.length < c.prerequisite.minimum) {
                            text += " Complete any " + (c.prerequisite.minimum - c.prerequisite.courses.mandatory.length) + " from: "
                            for (var i = 0; i < c.prerequisite.courses.optional.length; i++) {
                                var crs = this.getCourse(c.prerequisite.courses.optional[i])
                                temp.push(crs.code + " " + crs.name)
                            }
                            if (temp.length > 0) {
                                text += temp.join(", ")
                                text += "."
                            }
                        }
                        this.$swal("Pre-requisite not fullfilled", text, "error")
                        return
                    }

                    // check pre-reqs done previously
                    var lastSem = this.checkPreReqSem(c.prerequisite.courses.mandatory, c.prerequisite.courses.optional, c.prerequisite.minimum)
                    if (index <= lastSem) {
                        var text = "You finished the last pre-requisite on the " + this.selectionBoxes[lastSem].name + " semester. You must do this course after that sesmester."
                        this.$swal("Pre-requisite not fullfilled", text, "error")
                        return
                    }
                }
                this.selected.push(this.selectedCourse)
                this.selectedCourse = ""
                this.selectionBoxes[index].courses.push(c)
            }
        },
        removeCourse(id, sem) {
            const index = this.selected.indexOf(id)
            if (index > -1) {
                this.selected.splice(index, 1)
                var semIndex = -1
                var courses = this.selectionBoxes[sem].courses
                for (var i = 0; i < courses.length; i++) {
                    let c = courses[i]
                    if (c.id == id) {
                        semIndex = i
                        break
                    }
                }
                if (semIndex > -1) {
                    this.selectionBoxes[sem].courses.splice(semIndex, 1)
                }
            }
        }
    }
})
