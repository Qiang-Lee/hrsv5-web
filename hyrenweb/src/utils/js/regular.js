/**
 * @param {String} key 表示为对应的验证规则类型名称
 * @param {String} regex 表示为对应的验证规则
 * @param {String} error 表示为验证不通过时的错误提示
 * @param {String} title 表示为验证中文名称描述
 */
const regular = {
    number: { regex: /^[0-9]*$/, error: '只能填写数字', title: '整数' },
    chinese: { regex: /^[\u4e00-\u9fa5]{0,}$/, error: '只能填写中文', title: '中文' },
    email: { regex: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, error: '邮箱信息填写错误', title: '邮箱' },
    enAndNum: { regex: /^[A-Za-z0-9]+$/, error: '只能输入英文和数字', title: '英文和数字' },
    enAlphabet: { regex: /^[A-Za-z]+$/, error: '只能填写英文字母', title: '英文字母' },
    composition: { regex: /^\w{3,20}$/, error: '只能填写数字、26个英文字母或者下划线组成的字符串,至少三个字符', title: '英文,数字和下划线组合' },
    mobilePhone: { regex: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, error: '无效的手机号码', title: '手机' },
    accountNumber: { regex: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, error: '帐号不合法(以字母开头，允许5-16字符，允许字母数字下划线)', title: '账号' },
    password: { regex: /^[a-zA-Z]\w{5,17}$/, error: '密码不合法(以字母开头，长度在6~18字符之间，只能包含字母、数字和下划线)', title: '密码' },
    dataScourenum: { regex: /^[a-zA-Z][a-zA-z0-9]{3}$/, error: '编号不合法(以字母开头的不超过四位数的字母数字组合)', title: '编号' },
    confignum: { regex: /^[a-zA-z0-9]{1,4}$/, error: '编号不合法(1-4位数的数字或字母组合)', title: '任务编号' },
    ip_verification: { regex: /^(\d|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])$/, error: '无效IP地址', title: 'ip地址' },
    port_verification: { regex: /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/, error: '端口不合法，正确范围1024-65535', title: 'agent端口' },
}


export default regular