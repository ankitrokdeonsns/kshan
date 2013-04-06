Kshan = (function(unixEpoch, timezone){

    var timezoneOffsetFor = {
        'Etc/GMT+12' : '-720,0' ,
        'Pacific/Pago_Pago' : '-660,0' ,
        'America/Adak' : '-600,1' ,
        'Pacific/Honolulu' : '-600,0' ,
        'Pacific/Marquesas' : '-570,0' ,
        'Pacific/Gambier' : '-540,0' ,
        'America/Anchorage' : '-540,1' ,
        'America/Los_Angeles' : '-480,1' ,
        'Pacific/Pitcairn' : '-480,0' ,
        'America/Phoenix' : '-420,0' ,
        'America/Denver' : '-420,1' ,
        'America/Guatemala' : '-360,0' ,
        'America/Chicago' : '-360,1' ,
        'Pacific/Easter' : '-360,1,s' ,
        'America/Bogota' : '-300,0' ,
        'America/New_York' : '-300,1' ,
        'America/Caracas' : '-270,0' ,
        'America/Halifax' : '-240,1' ,
        'America/Santo_Domingo' : '-240,0' ,
        'America/Santiago' : '-240,1,s' ,
        'America/St_Johns' : '-210,1' ,
        'America/Godthab' : '-180,1' ,
        'America/Argentina/Buenos_Aires' : '-180,0' ,
        'America/Montevideo' : '-180,1,s' ,
        'Etc/GMT+2' : '-120,0' ,
        'Etc/GMT+2' : '-120,1' ,
        'Atlantic/Azores' : '-60,1' ,
        'Atlantic/Cape_Verde' : '-60,0' ,
        'Etc/UTC' : '0,0' ,
        'Europe/London' : '0,1' ,
        'Europe/Berlin' : '60,1' ,
        'Africa/Lagos' : '60,0' ,
        'Africa/Windhoek' : '60,1,s' ,
        'Asia/Beirut' : '120,1' ,
        'Africa/Johannesburg' : '120,0' ,
        'Asia/Baghdad' : '180,0' ,
        'Europe/Moscow' : '180,1' ,
        'Asia/Tehran' : '210,1' ,
        'Asia/Dubai' : '240,0' ,
        'Asia/Baku' : '240,1' ,
        'Asia/Kabul' : '270,0' ,
        'Asia/Yekaterinburg' : '300,1' ,
        'Asia/Karachi' : '300,0' ,
        'Asia/Kolkata' : '330,0' ,
        'Asia/Kathmandu' : '345,0' ,
        'Asia/Dhaka' : '360,0' ,
        'Asia/Omsk' : '360,1' ,
        'Asia/Rangoon' : '390,0' ,
        'Asia/Krasnoyarsk' : '420,1' ,
        'Asia/Jakarta' : '420,0' ,
        'Asia/Shanghai' : '480,0' ,
        'Asia/Irkutsk' : '480,1' ,
        'Australia/Eucla' : '525,0' ,
        'Australia/Eucla' : '525,1,s' ,
        'Asia/Yakutsk' : '540,1' ,
        'Asia/Tokyo' : '540,0' ,
        'Australia/Darwin' : '570,0' ,
        'Australia/Adelaide' : '570,1,s' ,
        'Australia/Brisbane' : '600,0' ,
        'Asia/Vladivostok' : '600,1' ,
        'Australia/Sydney' : '600,1,s' ,
        'Australia/Lord_Howe' : '630,1,s' ,
        'Asia/Kamchatka' : '660,1' ,
        'Pacific/Noumea' : '660,0' ,
        'Pacific/Norfolk' : '690,0' ,
        'Pacific/Auckland' : '720,1,s' ,
        'Pacific/Tarawa' : '720,0' ,
        'Pacific/Chatham' : '765,1,s' ,
        'Pacific/Tongatapu' : '780,0' ,
        'Pacific/Apia' : '780,1,s' ,
        'Pacific/Kiritimati' : '840,0'

    };
    var _date;
    var _timezone;
    var _timeStamp;

    var create = function(unixEpoch, timezone){
        _timeStamp = unixEpoch;

        if(timezone === undefined || timezone === null) {
            timezone = "Etc/UTC";
        }
        _timezone = timezone;

        var _timezoneOffsetKeys = timezoneOffsetFor[_timezone].split(",");
        var timezoneOffsetInMinutes = parseInt(_timezoneOffsetKeys[0]) + 60*parseInt(_timezoneOffsetKeys[1]);

        if (_timezone !== "Etc/UTC") {
            unixEpoch += (timezoneOffsetInMinutes * 60000);
        }

        _date = new Date(unixEpoch);
    };

    if(unixEpoch !== undefined && unixEpoch !== null)
        create(unixEpoch, timezone);
    else
        create((new Date()).getTime());

    return {
        date: function(){
            return _date.getUTCDate();
        },
        month: function(){
            return _date.getUTCMonth();
        },
        year: function(){
            return _date.getUTCFullYear();
        },
        hours:function () {
            return _date.getUTCHours();
        },
        minutes:function () {
            return _date.getUTCMinutes();
        },
        seconds:function () {
            return _date.getUTCSeconds();
        },
        milliseconds:function () {
            return _date.getUTCMilliseconds();
        },
        day:function(){
            return _date.getUTCDay();
        },
        timezone: function(){
            return _timezone;
        },
        timeStamp: function(){
            return _timeStamp;
        },
        compare:function(other){
            if(_timeStamp < other.timeStamp())
                return -1;
            else if (_timeStamp > other.timeStamp())
                return 1;
            return 0;
        }
    }
});

