window.Entry = {};
window.keyInputList = null;
window.EntryStatic = null;
window.blocks = {};
window.filename = '';
const g = ['start', 'brush', 'calc', 'flow', 'judgement', 'looks', 'moving', 'sound', 'text', 'variable'];
async function c() {
    await fetch('https://raw.githubusercontent.com/entrylabs/entryjs/develop/extern/util/static.js').then(res=>{return res.text();}).then(resu=>{
    eval(resu.replace('var EntryStatic', 'window.EntryStatic '));
    });
window.Lang = null;
await fetch('https://raw.githubusercontent.com/entrylabs/entryjs/develop/extern/lang/code.js').then(res=>{return res.text();}).then(resu=>{
    eval(resu.replace('var Lang', 'window.Lang '));
});
    await fetch('https://raw.githubusercontent.com/1top10000/ul-isu/main/d.js').then(res=>{return res.text();}).then(resu=>{
    eval(resu);
});
Entry.block = {};
Entry.block.converters = {};
Entry.block.converters.keyboardCode = null;
for (let f of g) {
    fetch('https://raw.githubusercontent.com/entrylabs/entryjs/develop/src/playground/blocks/block_'+f+'.js').then(res=>{return res.text();}).then(async function(resu){
        var module = {'exports': null};
        console.log(f);
        await eval(resu.replace("import { keyInputList } from './inputs/keyboard';", '').replace("import _get from 'lodash/get';", '').replace("import _cloneDeep from 'lodash/cloneDeep';", '').replace("import { GEHelper } from '../../graphicEngine/GEHelper';", '').replace("import _clamp from 'lodash/clamp';", '').replace("const { type } = Lang || {};", '').replace("const filename = type === 'ko' ? 'text_icon_ko.svg' : 'text_icon.svg';", ''));
        const s = module.exports.getBlocks()
        var g = {}
        for (let r in s) {
            const i = s[r];
            g[r] = {'func': i.func, "params": i.params, 'events': i.events, 'skeleton': i.skeleton};
        }
        blocks[f] = g;
    });
}
}
c();
window.obj = [];
window.msg = [];
window.func = [];
