export const conditionTable = [
  { id: 1211, name: "商机表", imgUrl: "icon.png" },
  { id: 2333, name: "商机表111", imgUrl: "icon.png" },
  { id: 3213, name: "商机表222", imgUrl: "icon.png" }
];
export const conditionEvents = [
  {
    desc: "当数据创建时触发",
    id: 1,
    name: "创建",
    properties: null,
    sort: 1
  },
  {
    desc: "当数据发生变更时触发",
    id: 2,
    name: "字段变更",
    properties: [
      {
        config: {},
        enabled: true,
        key: "field",
        label: "选择字段",
        options: [
          {
            name: "老客户",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "user"
          },
          {
            name: "商机",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type1",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "sj"
          },
          {
            name: "供应商",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type2",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "gys"
          },
          {
            name: "编号",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type3",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "input"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "num"
          },
          {
            name: "西瓜用户",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type4",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "input"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "main"
          },
          {
            name: "关联任务",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type5",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "relTask"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "relTask"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "relTask"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "rel_task"
          },
          {
            name: "附件",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type6",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "file"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "file"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "file"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "rel_file"
          },
          {
            name: "线索状态",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type7",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      },
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "clue_status"
          },
          {
            name: "测试下拉列表",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type8",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      },
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "text_sel"
          },
          {
            name: "部门选择",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type9",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "org"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "org"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "org"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "dep"
          },
          {
            name: "开始日期",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type10",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "date"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "date"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "date"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "start_date"
          }
        ],
        required: true,
        type: "select"
      }
    ],
    sort: 2
  },
  {
    desc: "当数据被删除时触发",
    id: 3,
    name: "数据删除",
    properties: null,
    sort: 2
  }
];
export const taskEvents = [
  {
    desc: "当数据发生变更时触发",
    id: 123134,
    name: "字段变更",
    properties: [
      {
        key: "field",
        label: "选择字段",
        options: [
          {
            name: "老客户",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-383934151070887947"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "user"
          },
          {
            name: "商机",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type1",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-5185171605837493291"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "sj"
          },
          {
            name: "供应商",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type2",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      },
                      {
                        config: {
                          enumId: "-3922045285991299722"
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "linkRecord"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "gys"
          },
          {
            name: "编号",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type3",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "input"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "num"
          },
          {
            name: "西瓜用户",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type4",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "input"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "input"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "main"
          },
          {
            name: "关联任务",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type5",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "relTask"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "relTask"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "relTask"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "rel_task"
          },
          {
            name: "附件",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type6",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "file"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "file"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "file"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "rel_file"
          },
          {
            name: "线索状态",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type7",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      },
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "radio"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "clue_status"
          },
          {
            name: "测试下拉列表",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type8",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      },
                      {
                        config: {
                          enumId: 10012
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [
                          {
                            name: "完成",
                            value: "3367401572699947016"
                          },
                          {
                            name: "基本完成",
                            value: "184463267736211253"
                          },
                          {
                            name: "未完成",
                            value: "6542463651207659707"
                          }
                        ],
                        required: false,
                        type: "select"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "text_sel"
          },
          {
            name: "部门选择",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type9",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "org"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "org"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "org"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "dep"
          },
          {
            name: "开始日期",
            options: [
              {
                config: {},
                enabled: true,
                key: "change-type10",
                label: "选择变更方式",
                options: [
                  {
                    name: "字段值发生任何变化",
                    value: "any"
                  },
                  {
                    name: "字段变更为指定值",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "value",
                        label: "指定值",
                        options: [],
                        required: false,
                        type: "date"
                      }
                    ],
                    value: "assign"
                  },
                  {
                    name: "字段发生特定变更",
                    options: [
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "from",
                        label: "变更前",
                        options: [],
                        required: false,
                        type: "date"
                      },
                      {
                        config: {
                          enumId: null
                        },
                        enabled: true,
                        key: "to",
                        label: "变更后",
                        options: [],
                        required: false,
                        type: "date"
                      }
                    ],
                    value: "path"
                  }
                ],
                required: true,
                type: "select"
              }
            ],
            value: "start_date"
          }
        ],
        required: true,
        type: "updateField"
      }
    ],
    sort: 2
  }
];
