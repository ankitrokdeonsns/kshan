Kshan = (function(){
    var d = new Date();
    return {
        date: function(){
            return d.getUTCDate();
        },
        month: function(){
            return d.getUTCMonth();
        },
        year: function(){
            return d.getUTCFullYear();
        }
    }
});