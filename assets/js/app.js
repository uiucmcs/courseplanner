Vue.component('v-select', VueSelect.VueSelect);

var app = new Vue({
    el: '#app',
    data: {
        all: courseData,
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
            semester: null,
            year: new Date().getFullYear()
        },
        selectedCourse: "",
        selectionBoxes: []
    },
    created() {
        this.start.semester = this.getCurrentSemester()
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
                var cs = this.getCategoryForACourse(this.selected[i])
                parent = cs[0].parent
                var updParentTotal = true
                if (cs.length > 1) {
                    parent = cs[1].parent
                    if (calc.categories[parent].total >= this.all.requirements.req[parent].minimum_credit) {
                        calc.categories[cs[0].parent].total += this.perCredit
                        updParentTotal = false
                    }
                }
                calc.total += this.perCredit
                if (updParentTotal) {
                    calc.categories[parent].total += this.perCredit
                }

                for (c of cs) {
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
            var cats = []
            var c = this.getCourse(id)
            for (var i = 0; i < this.categories.length; i++) {
                if (c.category.includes(this.categories[i].id)) {
                    cat = {
                        "id": this.categories[i].id,
                        "parent": this.categories[i].type
                    }
                    cats.push(cat)
                }
            }
            return cats
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
        getCurrentSemester() {
            const month = new Date().getMonth()
            if (month <= 3) {
                return "spring"
            } else if (month <= 6) {
                return "summer"
            } else {
                return "fall"
            }
        },
        getSemesterOptions() {
            return [{
                    "label": "Spring",
                    "code": "spring"
                },
                {
                    "label": "Summer",
                    "code": "summer"
                },
                {
                    "label": "Fall",
                    "code": "fall"
                }
            ]
        },
        getYearOptions() {
            var c = []
            for (var i = this.start.year - 5; i <= this.start.year + 1; i++) {
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
                if (index != 0 && index % 3 == 0) {
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
        checkPreReq(c) {
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
                    Swal.fire({
                        title: "Pre-requisite not fulfilled",
                        text: text,
                        icon: "error"
                    })
                    return false
                }

                // check pre-reqs done previously
                var lastSem = this.checkPreReqSem(c.prerequisite.courses.mandatory, c.prerequisite.courses.optional, c.prerequisite.minimum)
                if (index <= lastSem) {
                    var text = "You finished the last pre-requisite on the " + this.selectionBoxes[lastSem].name + " semester. You must do this course after that sesmester."
                    Swal.fire({
                        title: "Pre-requisite not fulfilled",
                        text: text,
                        icon: "error"
                    })
                    return false
                }
                return true
            }
            return true
        },
        async addCourse(index, sem) {
            if (this.selectedCourse && this.selectedCourse.length > 0) {
                var c = this.getCourse(this.selectedCourse)
                // check semester availability
                if (!c.semester.includes(sem)) {
                    var text = c.code + " " + c.name + " is usually not offered in the " + sem +
                        " semester. Generally offered in " + c.semester.join(", ") + " semester(s)."
                    const semText = sem.charAt(0).toUpperCase() + sem.slice(1)
                    const alert = await Swal.fire({
                        title: "Add to " + semText + " semester?",
                        text: text,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Add"
                    })
                    if (alert.isDismissed) {
                        return
                    }
                }
                // check pre-requisite
                if (this.checkPreReq(c)) {
                    this.selected.push(this.selectedCourse)
                    this.selectedCourse = ""
                    this.selectionBoxes[index].courses.push(c)
                }
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
