export interface SheetContent {
    name: string;
    syntax: string;
    results?: string;
}

class SheetItem {
    readonly title: string;
    readonly contents: SheetContent[];

    constructor(title: string, contents: SheetContent[]) {
        this.title = title;
        this.contents = contents;
    }
}

const basicSyntax = new SheetItem("Basic Syntax", [
    {name: "Heading", syntax: "# h1\n###### h6", results: "# h1\n###### h6"},
    {name: "Bold", syntax: "**Bold**"},
    {name: "Italic", syntax: "*Italic*"},
    {name: "Bold and Italic", syntax: "***Bold and Italic***"},
    {name: "Strikethrough", syntax: "~~Strikethrough~~"}
]);

const blockQuotes = new SheetItem("Block Quotes", [
    {name: "Block Quotes", syntax: "> text"}
]);

const lists = new SheetItem("Lists", [
    {name: "Unordered List", syntax: "* list\n* list\n* list"},
    {name: "Ordered List", syntax: "1. list\n2. list\n3. list"}
]);

const code = new SheetItem("Code", [
    {name: "code", syntax: "`code`"},
    {name: "Fenced Code Block", syntax: "```\ncode blocks\n```"}
]);

const linkAndImages = new SheetItem("Links and Images", [
    {name: "Link", syntax: "[link name](URL)", results: "[google](https://www.google.com)"},
    {name: "Image", syntax: "![alt name](URL)", results: "![image](https://picsum.photos/100)"},
]);

const horizontalRules = new SheetItem("Horizontal Rules", [
    {name: "Horizontal Rule", syntax: "---, ===, ***", results: "---"}
]);

const taskLists = new SheetItem("Task Lists", [
    {name: "Task List", syntax: "- [x] task1\n- [ ] task2\n- [ ] task3"}
]);

export const leftItems = [basicSyntax, blockQuotes, lists];
export const rightItems = [code, linkAndImages, horizontalRules, taskLists];
