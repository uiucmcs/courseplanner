const courseData = {
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
            "code": "CS 441",
            "name": "Applied Machine Learning",
            "semester": [
                "fall",
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
            "id": "nlp",
            "code": "CS 447",
            "name": "Natural Language Processing",
            "semester": [
                "fall"
            ],
            "category": [
                "brd-1"
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
                "fall",
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
            "code": "CS 435",
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
            "code": "CS 437",
            "name": "Internet of Things",
            "semester": [
                "fall",
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