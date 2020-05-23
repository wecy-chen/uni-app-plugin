'use strict'

module.exports = {
  types: [
    { value: 'feat', name: '特性:    一个新的特性' },
    { value: 'fix', name: '修复:    修复一个Bug' },
    { value: 'docs', name: '文档:    变更的只有文档' },
    {
      value: 'style',
      name: '格式:    不影响代码含义的更改（空格，格式，缺少分号等）'
    },
    { value: 'refactor', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: '性能:    提升性能' },
    { value: 'test', name: '测试:    添加一个测试' },
    { value: 'chore', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: 'revert', name: '回滚:    代码回退' },
    { value: 'WIP', name: '临时:     工作正在进行中' }
  ],

  scopeOverrides: {
    // fix: [
    //   { name: 'merge' },
    //   { name: 'style' },
    //   { name: 'e2eTest' },
    //   { name: 'unitTest' }
    // ]
  },

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围 (可选):',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关闭关联的issue，例如：#31, #34(可选):\n',
    confirmCommit: '您确定要继续上面的提交吗？'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:', // default value
}
