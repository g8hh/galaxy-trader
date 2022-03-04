/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Adriana's Cosmetics": "阿德里安娜的化妆品",
    "Agent": "代理人",
    "Alpha Centauri": "半人马座阿尔法星",
    "Azophi": "偶氮菌",
    "Barus 5": "巴鲁斯 5",
    "Begin": "开始",
    "Close": "关闭",
    "Common Goods": "普通商品",
    "Corporation": "公司",
    "Create": "创建",
    "Destination": "目的地",
    "Dev Log": "开发日志",
    "Factories & Stations": "工厂和车站",
    "Factory": "工厂",
    "Gemini Alpha": "双子座阿尔法",
    "Inputs": "输入",
    "Location": "地点",
    "Menu": "菜单",
    "Nuke": "核弹(重玩)",
    "Outputs": "输出",
    "Pause": "暂停",
    "Restaurant at the End": "尽头的餐厅",
    "Resume": "恢复",
    "Run": "运行",
    "Solar Plant": "太阳能发电厂",
    "SolSystem": "太阳系",
    "Star Gates": "星门",
    "Station": "车站",
    "t": "吨",
    "Tier 2 Goods": "2 级商品",
    "Trade Goods": "贸易商品",
    "Vessel": "血管",
    "Vessels": "船只",
    "Welcome": "欢迎",
    "Welcome to Galaxy Trader. After starting your own Corporation your goal is to begin making money by trading commodities between space stations. Buy low and sell high!": "欢迎来到银河交易者。 建立自己的公司后，您的目标是通过在空间站之间交易商品开始赚钱。 低买高卖！",
    "Andromeda": "仙女座",
    "Articles of Incorporation": "公司章程",
    "By signing below you hereby acknoledge the information in this document to be true and binding.": "通过在下方签名，您在此确认本文档中的信息真实且具有约束力。",
    "Cancel": "取消",
    "NGC 4826": "NGC 4826",
    "Ok": "好的",
    "Signature": "签名",
    "Sirius Binar": "天狼星比纳尔",
    "The initial assests of the company are: 2000 credits": "公司初始资产为：2000 积分",
    "The name of the corporation is": "公司名称是",
    "The purpose of the corporation is to engage in any lawful act or activity for which a corporation may be organized under General Corporation Law.": "公司的目的是从事根据一般公司法可以组织公司的任何合法行为或活动。",
    "Along with 2000 credits, you're being given a ship and a captain to pilot it.": "除了 2000 积分外，您还将获得一艘船和一名船长来驾驶它。",
    "Buy": "购买",
    "USN Manhattan, Agent 003": "美国海军曼哈顿号，特工 003",
    "Will be piloting the Firefly class transport vessel--": "将驾驶萤火虫级运输船——",
    "x Coord": "x 坐标",
    "y Coord": "y 坐标",
    "Your currently selected Agent is listed in the HUD at the top, and your Corporation's balance of credits is in the upper right.": "您当前选择的代理人列在顶部的 HUD 中，您公司的积分余额在右上角。",
    "Your first captain and buying agent--": "你的第一任船长兼采购代理——",
    "Your First Ship": "你的第一艘船",
    "Cattle Ranch": "养牛场",
    "Create Location": "创建位置",
    "Dorado": "多拉多",
    "Grain Farm": "粮食农场",
    "Hire Agent": "聘请代理",
    "iCorp": "iCorp",
    "Interesting": "有趣的",
    "Main Screen Turn On": "主屏幕开启",
    "Make it so!": "就这样吧！",
    "Name": "姓名",
    "Sell": "出售",
    "The left side of your screen is the map showing the locations you've discovered, and your current location in green.": "屏幕左侧是地图，显示您发现的位置，当前位置以绿色显示。",
    "The right side of your screen is the current system display, listing the Factories and Stations you can interact with; the Star Gates you can travel through; and the Vessels present in the system, including yours.": "屏幕右侧是当前系统显示，列出了您可以与之交互的工厂和站点； 你可以穿越的星门； 以及系统中存在的船只，包括您的船只。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Cargo (": "货物 (",
    "Ecell @ ": "电芯 @ ",
    "Universe (": "宇宙 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Cosmetics \- (.+) units \@ (.+)$/, '化妆品 \- $1 件 \@ $2'],
    [/^Ecell \- (.+) units \@ (.+)$/, '电芯 \- $1 件 \@ $2'],
    [/^Grains \- (.+) units \@ (.+)$/, '谷物 \- $1 件 \@ $2'],
    [/^Livestock \- (.+) units \@ (.+)$/, '牲畜 \- $1 件 \@ $2'],
    [/^Ore (.+) units \@ (.+)$/, '矿石 $1 件 \@ $2'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);