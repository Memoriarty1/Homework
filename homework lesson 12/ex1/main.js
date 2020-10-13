obj = {
    anonim: { say: 'Hello anonim' },
    user: { say: 'Hello user' },
    admin: { say: 'Hello admin' }
};
function greeting(who) {
    alert(this[who].say );
}
greeting.call(obj, 'admin');
