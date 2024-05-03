function Rnddf(f0) {
    var b = {};
    let f = f0;
    while (f[0] == '6') {
        const tf = f.substring(0, f.indexOf('f0'));
        const tf0 = tf.split('f1');
        var n = '';
        for (var i = 0; i < tf0[0].length / 2; i++) {
            n = n + tf0[0][(i * 2) + 1];
        }
        var v = '';
        for (var i = 0; i < tf0[1].length / 2; i++) {
            v = v + tf0[1][(i * 2) + 1];
        }
        const textDecoder = new TextDecoder();

        var dn = f.substr(tf.length + 2, parseInt(n, 16) * 2);
        var un = [];
        for (var i = 0; i < dn.length / 2; i++) {
            un[i] = parseInt(dn.substr(i * 2, 2), 16);
        }
        var dv = f.substr(tf.length + 2 + (parseInt(n, 16) * 2), parseInt(v, 16) * 2);
        var uv = [];
        for (var i = 0; i < dv.length / 2; i++) {
            uv[i] = parseInt(dv.substr(i * 2, 2), 16);
        }
        let mp = 'b';
        const p = Array.from(textDecoder.decode(new Uint8Array(un)).split('\\'), (i) => {
            mp = mp + '["' + i.replace(/"/g, '\\"') + '"]';
            return 'if (' + mp + ' == undefined) {' + mp + ' = {}; } \n '
        }).join('');
        const type = f.substr(tf.length + 2 + (parseInt(n, 16) * 2) + parseInt(v, 16) * 2, 2);
        console.log(type);
        let va = textDecoder.decode(new Uint8Array(uv)).replace(/"/g, '\\"');
        if (type[0] == '0') { //undefined:0 (null):9 boolean:a number:f bigint:4 string:1 symbol:6(x) function:e(x) ?:7
            va = undefined;
        } else if (type[0] == 'a') {
            if (va === 'true') {
                va = true;
            } else {
                va = false;
            }
        } else if (type[0] == '9') {
            va = null;
        } else if (type[0] == 'f') {
            va = Number(va);
        } else if (type[0] == '4') {
            va = BigInt(va);
        } else if (type[0] == '1') {
            va = '"' + va + '"';
        }
        if (type[1] == '2') {
            eval(p + mp + ' = ' + va);
        } else {
            eval(p);
        }
        f = f.substr(tf.length + 4 + (parseInt(n, 16) * 2) + parseInt(v, 16) * 2);
    }
    return b;
}
async function Cnddf(d, fn) {
    const cb = (n, v, t) => {
        const textEncoder = new TextEncoder();
        const vh = Array.from(textEncoder.encode(v), (i) => {
            return i.toString(16);
        }).join('');
        const nh = Array.from(textEncoder.encode(n), (i) => {
            return i.toString(16);
        }).join('');
        const vlh = (vh.length / 2).toString(16);
        const nlh = (nh.length / 2).toString(16);
        const nc = Array.from(nlh, (i) => {
            return '6' + i;
        }).join('');
        const vc = Array.from(vlh, (i) => {
            return '7' + i;
        }).join('');
        return nc + 'f1' + vc + 'f0' + nh + vh + t;
    }
    function r(j, p) {
        console.log(j, p);
        let g = (typeof j[Object.keys(j)[0]]) != 'object';
        if (j[Object.keys(j)[0]] === null) {
            g = true;
        }
        if (Object.keys(j).length == 1 && g && Object.keys(j[Object.keys(j)[0]]).length == 1) {
            var type = '7'; //undefined:0 (null):9 boolean:a number:f bigint:4 string:1 symbol:6(x) function:e(x) ?:7
            if (typeof j[Object.keys(j)[0]] === 'undefined') {
                type = '0';
            } else if (typeof j[Object.keys(j)[0]] === 'boolean') {
                type = 'a';
            } else if (typeof j[Object.keys(j)[0]] === 'number') {
                type = 'f';
            } else if (typeof j[Object.keys(j)[0]] === 'bigint') {
                type = '4';
            } else if (typeof j[Object.keys(j)[0]] === 'string') {
                type = '1';
            } else if (j[Object.keys(j)[0]] === null) {
                type = '9';
            }
            if (typeof j[Object.keys(j)[0]] === 'undefined') {
                f = f + cb(p, 'undefined', type + '2');
            } else if (j[Object.keys(j)[0]] === null) {
                f = f + cb(p, 'null', type + '2');
            } else {
                console.log(j, Object.keys(j));
                f = f + cb(p, j[Object.keys(j)[0]].toString(), type + '2');
            }
        } else if (Object.keys(j).length == 1 && Object.keys(j[Object.keys(j)[0]]).length == 0) {
            f = f + cb(p, '0', '73');
        } else {
            let e;
            if (Object.keys(j).length == 1) {
                e = j[Object.keys(j)[0]]
            } else {
                e = j
            }
            for (let i in e) {
                let k = {}
                k[i] = e[i];
                r(k, p + '\\' + i);
            }
        }
    }
    let f = '';
    await r(d, fn);
    return f;
}
