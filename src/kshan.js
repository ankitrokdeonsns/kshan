Kshan = (function(unixEpoch){
    var _date;
    if(unixEpoch !== undefined && unixEpoch !== null)
        _date = new Date(unixEpoch);
    else
        _date = new Date();
    return {
        date: function(){
            return _date.getUTCDate();
        },
        month: function(){
            return _date.getUTCMonth();
        },
        year: function(){
            return _date.getUTCFullYear();
        }
    }
});