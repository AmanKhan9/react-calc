const operations = {
    '%':(a,b) => (parseFloat(a)%parseFloat(b)),
    '/':(a,b) => (parseFloat(a)/parseFloat(b)),
    '+':(a,b) => (parseFloat(a)+ parseFloat(b)),
    '-':(a,b) => (parseFloat(a)-parseFloat(b)),
    '*':(a,b) => (parseFloat(a)*parseFloat(b)),
}

export default operations;