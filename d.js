const f = {
    'objects': [
        {
            "id": "30hn",
            "name": "새 오브젝트2",
            "script": "[[{\"id\":\"ntg8\",\"x\":50,\"y\":30,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},{\"id\":\"7fqa\",\"x\":0,\"y\":0,\"type\":\"message_cast\",\"params\":[\"0meu\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}]]",
            "objectType": "sprite",
            "rotateMethod": "free",
            "scene": "7dwq",
            "sprite": {
                "pictures": [
                    {
                        "id": "mkbt",
                        "dimension": {
                            "width": 442,
                            "height": 202,
                            "scaleX": 0.5,
                            "scaleY": 0.5
                        },
                        "filename": "e8g36uhwlkdv9g6e0i6qd7d7012j66hp",
                        "name": "새그림",
                        "imageType": "png"
                    }
                ],
                "sounds": []
            },
            "selectedPictureId": "mkbt",
            "lock": false,
            "entity": {
                "x": 77.17,
                "y": -90.68,
                "regX": 221,
                "regY": 101,
                "scaleX": 0.5,
                "scaleY": 0.5,
                "rotation": 0,
                "direction": 90,
                "width": 442,
                "height": 202,
                "font": "undefinedpx ",
                "visible": true
            }
        },
        {
            "id": "7y0y",
            "name": "엔트리봇",
            "script": "[[{\"id\":\"587h\",\"x\":50,\"y\":30,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},{\"id\":\"filz\",\"x\":0,\"y\":0,\"type\":\"repeat_basic\",\"params\":[{\"id\":\"tecx\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[10],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"mkr2\",\"x\":0,\"y\":0,\"type\":\"move_direction\",\"params\":[{\"id\":\"s9qd\",\"x\":0,\"y\":0,\"type\":\"func_mium\",\"params\":[{\"id\":\"xxg0\",\"x\":0,\"y\":0,\"type\":\"text\",\"params\":[10],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}]]",
            "objectType": "sprite",
            "rotateMethod": "free",
            "scene": "7dwq",
            "sprite": {
                "pictures": [
                    {
                        "id": "vx80",
                        "dimension": {
                            "width": 144,
                            "height": 246,
                            "scaleX": 0.5128205128205128,
                            "scaleY": 0.5128205128205128
                        },
                        "fileurl": "/lib/entry-js/images/media/entrybot1.svg",
                        "name": "엔트리봇_걷기1",
                        "imageType": "svg"
                    },
                    {
                        "id": "4t48",
                        "dimension": {
                            "width": 144,
                            "height": 246
                        },
                        "fileurl": "/lib/entry-js/images/media/entrybot2.svg",
                        "name": "엔트리봇_걷기2",
                        "imageType": "svg"
                    }
                ],
                "sounds": [
                    {
                        "duration": 1.3,
                        "ext": ".mp3",
                        "id": "8el5",
                        "fileurl": "/lib/entry-js/images/media/bark.mp3",
                        "name": "강아지 짖는 소리"
                    }
                ]
            },
            "selectedPictureId": "vx80",
            "lock": false,
            "entity": {
                "x": -78.02,
                "y": -3.39,
                "regX": 72,
                "regY": 123,
                "scaleX": 0.5128205128205128,
                "scaleY": 0.5128205128205128,
                "rotation": 0,
                "direction": 90,
                "width": 144,
                "height": 246,
                "font": "undefinedpx ",
                "visible": true
            }
        }
    ],
    'scenes': [
        {
                "id": "7dwq",
                "name": "장면 1"
            }
    ],
    'variables': [
        {
                    "name": "아잉봉뀨",
                    "id": "okuv",
                    "visible": true,
                    "value": "울이수",
                    "variableType": "variable",
                    "isCloud": false,
                    "isRealTime": false,
                    "cloudDate": false,
                    "object": null,
                    "x": -230,
                    "y": -105
                },
        {
                    "name": "ㅎ",
                    "id": "d16h",
                    "visible": true,
                    "value": 0,
                    "variableType": "list",
                    "isCloud": false,
                    "isRealTime": false,
                    "cloudDate": false,
                    "object": null,
                    "x": 120,
                    "y": -115,
                    "width": 100,
                    "height": 120,
                    "array": [
                        {
                            "data": "ㄹ"
                        },
                        {
                            "data": "ㅗㅍ"
                        },
                        {
                            "data": "ㄴ로"
                        }
                    ]
                },
        {
                    "name": "초시계",
                    "id": "brih",
                    "visible": false,
                    "value": 0,
                    "variableType": "timer",
                    "isCloud": false,
                    "isRealTime": false,
                    "cloudDate": false,
                    "object": null,
                    "x": 134,
                    "y": -70
                },
        {
                    "name": "대답",
                    "id": "1vu8",
                    "visible": false,
                    "value": "0",
                    "variableType": "answer",
                    "isCloud": false,
                    "isRealTime": false,
                    "cloudDate": false,
                    "object": null,
                    "x": 150,
                    "y": -100
                }
    ],
    'messages': [
        {
            "id": "0meu",
            "name": "ㅎㅎㅎㅎ"
        }
    ],
    'functions': [
        {
            "id": "mium",
            "type": "value",
            "localVariables": [
                {
                    "name": "지역변수",
                    "value": 0,
                    "id": "mium_6jz0"
                },
                {
                   "name": "지역변수1",
                   "value": 0,
                   "id": "mium_urtq"
                }
            ],
            "useLocalVariables": true,
            "content": "[[{\"id\":\"rgwl\",\"x\":50,\"y\":30,\"type\":\"function_create_value\",\"params\":[{\"id\":\"1uli\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"하핳\",{\"id\":\"1p1f\",\"x\":0,\"y\":0,\"type\":\"function_field_string\",\"params\":[{\"id\":\"iigf\",\"x\":0,\"y\":0,\"type\":\"stringParam_1kex\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"assemble\":false,\"extensions\":[]}],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"assemble\":true,\"extensions\":[]},null,null,{\"id\":\"f0so\",\"x\":0,\"y\":0,\"type\":\"stringParam_1kex\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}],\"statements\":[[{\"id\":\"gfsi\",\"x\":0,\"y\":0,\"type\":\"set_func_variable\",\"params\":[\"mium_6jz0\",{\"id\":\"4huo\",\"x\":0,\"y\":0,\"type\":\"stringParam_1kex\",\"params\":[],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},{\"id\":\"jbc2\",\"x\":0,\"y\":0,\"type\":\"move_x\",\"params\":[{\"id\":\"y7ng\",\"x\":0,\"y\":0,\"type\":\"get_func_variable\",\"params\":[\"mium_6jz0\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"assemble\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"assemble\":true,\"extensions\":[]}]]"
        }
    ],
    'tables': [],
    'speed': 60,
    'interface': {
        "menuWidth": 280,
        "canvasWidth": 480,
        "object": "7y0y"
    },
    'expansionBlocks': [],
    'aiUtilizeBlocks': [],
    'hardwareLiteBlocks': [],
    'externalModules': [],
    'externalModulesLite': []
}
