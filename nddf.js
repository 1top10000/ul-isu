function Rnddf() {

}
function Cnddf(d) {
    function cb(n, v, t) {
        const textEncoder = new TextEncoder();
        const vh = Array.from(textEncoder.encode(v), (i) => {
            return i.toString(16)
        }).join('');
        const nh = Array.from(textEncoder.encode(n), (i) => {
            return i.toString(16)
        }).join('');
        const vlh = (vh.length / 2).toString(16);
        const nlh = (nh.length / 2).toString(16);
        const nc = Array.from(nlh, (i) => {
            return '6' + i;
        }).join('');
        const vc = Array.from(vlh, (i) => {
            return '7' + i;
        }).join('');
        console.log(vc);
        return nc + vc + 'f0' + nh + vh + t;
    }
    function r(j, p) {
        if (Object.keys(j).length == 1 && typeof j[Object.keys(j)] != 'object') {
            console.log(j, p);
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
                r(k, p+'\\'+i);
            }
        }
    }
}
