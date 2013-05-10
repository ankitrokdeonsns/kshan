Kshan = (function(){

    var dstRules = {
        "EU": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 2,
                "hours": 1,
                "minutes": 0,
                "isUtcTime": true,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 9,
                "hours": 1,
                "minutes": 0,
                "isUtcTime": true,
                "offset": 0
            }
        },
        "Thule": {
            "on": {
                "which": "second",
                "day": 0,
                "month": 2,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 10,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Azer": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 2,
                "hours": 4,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 9,
                "hours": 5,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "US1": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        }, //for mexico as well
        "US2": {
            "on": {
                "which": "second",
                "day": 0,
                "month": 2,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 10,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        }, //for haiti, cuba after 2012
        "Cuba": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 10,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Brazil": {
            /*
            * in southern hemisphere off time will be in next year
            * doesnt handle carnival related exception
            */
            "on": {
                "which": "third",
                "day": 0,
                "month": 9,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "third",
                "day": 0,
                "month": 1,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Chile1": {
            "on": {
                "which": "second",
                "day": 0,
                "month": 8,
                "hours": 4,
                "minutes": 0,
                "isUtcTime": true,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 3,
                "hours": 3,
                "minutes": 0,
                "isUtcTime": true,
                "offset": 0
            }
        },
        "Chile2": {
            "on": {
                "which": "first",
                "day": 6,
                "month": 8,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 6,
                "month": 3,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Para": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 9,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "third",
                "day": 0,
                "month": 2,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Uruguay": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "second",
                "day": 0,
                "month": 2,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Lebanon": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 2,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 9,
                "hours": 0,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Australia": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "LH": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 30
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Fiji": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "third",
                "day": 0,
                "month": 0,
                "hours": 3,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "NZ": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 8,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Chatham": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 8,
                "hours": 2,
                "minutes": 45,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 45,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "WS": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 8,
                "hours": 3,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 4,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "LY": {
            "on": {
                "which": "last",
                "day": 5,
                "month": 2,
                "hours": 1,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 5,
                "month": 9,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Morocco": {
            "on": {
                "which": "last",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "last",
                "day": 0,
                "month": 8,
                "hours": 3,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        },
        "Namibia": {
            "on": {
                "which": "first",
                "day": 0,
                "month": 8,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 60
            },
            "off": {
                "which": "first",
                "day": 0,
                "month": 3,
                "hours": 2,
                "minutes": 0,
                "isUtcTime": false,
                "offset": 0
            }
        }
    };
    /*
    dont support iran, palestine since based on date and not day of month
    dont supprort israel (zion) weird dst rule possible if another json maintained
    dont support syria not clear information

     */
    var timezones = {
        'Europe/Tirane': {
            'offset': 60,
            'dstRules': [{
                'name': 'EU',
                'from': 1985,
                'until': 'max'
            }]
        },
        'Europe/Andorra': {
            'offset': 60,
            'dstRules':[{
                'name': 'EU',
                'from': 1985,
                'until': 'max'
            }]
        },
        'Europe/Vienna': {
            'offset': 60,
            'dstRules': [{
                'name':'EU',
                'from': 1980,
                'until': 'max'
            }]
        },
        'Europe/Brussels': {
            'offset': 60,
            'dstRules': [{
                'name': 'EU',
                'from': 1977,
                'until': 'max'
            }]
        },
        'Europe/Sofia': {
            'offset': 120,
            'dstRules': [{
                'name':'EU',
                'from': 1997,
                'until': 'max'
            }]
        },
        'America/Los_Angeles': {
            'offset': 480,
            'isSouthernHemisphere': false,
            'dstRules': [{
                'name':'US1',
                'from': 1987,
                'until': 2006
            },
                {
                'name':'US2',
                'from': 2007,
                'until': 'max'
            }]
        },
        'Asia/Kolkata': {
            'offset': -330
        },
        'Etc/UTC': {
            'offset': 0
        },
        'Australia/Sydney': {
            'offset': -600,
            'isSouthernHemisphere': true,
            'dstRules': [{
                'name': 'Australia',
                'from': 2008,
                'until': 'max'
            }]
        }
    };
    var _date;
    var _timezoneName;
    var _timeStamp;
    var _timezoneOffsetInMinutes;

    var nthDayOfMonth = function(which, day, month, year, hour, timezoneOffsetInMinutes){
        var firstDateOfMonth = new Date(Date.UTC(year, month, 1, hour));
        var firstDayOfMonth = firstDateOfMonth.getDay();
        var offset = day - firstDayOfMonth;
        if(offset < 0)
            offset += 7;
        firstDateOfMonth.setDate(firstDateOfMonth.getDate() + offset);
        //firstDateOfMonth is now firstRequiredDay
        var list = ['first', 'second', 'third', 'fourth', 'fifth'];
        for(var i = 0; i < list.length; i++){
            if(which === list[i])
                break;
            firstDateOfMonth.setDate(firstDateOfMonth.getDate() + 7);
        }
        if(which === 'last')
            while(firstDateOfMonth.getMonth() !== month)
                firstDateOfMonth.setDate(firstDateOfMonth.getDate() - 7);
        if(_timezoneOffsetInMinutes !== undefined)
            firstDateOfMonth.setMinutes(firstDateOfMonth.getMinutes() + _timezoneOffsetInMinutes)
        return firstDateOfMonth;
    };

    var utcDateIsInDST = function(date, timezoneOffsetInMinutes, onDSTRule, offDSTRule, isSouthernHemisphere){
        if(onDSTRule === undefined)
            return false;
        if(offDSTRule === undefined)
            return false;
        var utcDateForDSTStart = nthDayOfMonth(onDSTRule['which'],
            onDSTRule['day'],
            onDSTRule['month'],
            date.getUTCFullYear(),
            onDSTRule['hours'],
            _timezoneOffsetInMinutes);
        var utcDateForDSTEnd = nthDayOfMonth(offDSTRule['which'],
            offDSTRule['day'],
            offDSTRule['month'],
            date.getUTCFullYear() + isSouthernHemisphere,
            offDSTRule['hours'],
            _timezoneOffsetInMinutes - onDSTRule['offset']);
        if(isSouthernHemisphere && (date.getUTCMonth() < 6)){
            utcDateForDSTStart.setUTCFullYear(utcDateForDSTStart.getUTCFullYear() - 1);
            utcDateForDSTEnd.setUTCFullYear(utcDateForDSTEnd.getUTCFullYear() - 1);
        }
        return (date >= utcDateForDSTStart) &&
            (date < utcDateForDSTEnd)
    };

    var getDSTRule = function(timezoneName, year, ruleStatus){
        var dstRulesForTimezone = timezones[timezoneName]['dstRules'];
        if(dstRulesForTimezone === undefined)
            return undefined;
        for(var i = 0; i < dstRulesForTimezone.length; i++){
            var dstRule = dstRulesForTimezone[i];
            if((dstRule['until'] === 'max' && dstRule['from'] <= year) ||
                (dstRule['until'] > year && dstRule['from'] <= year))
                return dstRules[dstRule['name']][ruleStatus];

        }
        return undefined;
    };

    var createFromUnixEpoch = function(unixEpoch){
        _timeStamp = unixEpoch;
        if (_timezoneName !== "Etc/UTC") {
            unixEpoch -= (_timezoneOffsetInMinutes * 60000);
        }
        _date = new Date(unixEpoch);
        var onDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'on');
        var offDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'off');
        if(utcDateIsInDST(new Date(_timeStamp), _timezoneOffsetInMinutes, onDSTRule, offDSTRule, timezones[_timezoneName]['isSouthernHemisphere']))
            _date.setMinutes(_date.getMinutes() + onDSTRule['offset']);
    };

    var createFromUnixEpochForDateTimeValues = function(unixEpoch){
        _timeStamp = unixEpoch;
        if (_timezoneName !== "Etc/UTC") {
            _timeStamp += (_timezoneOffsetInMinutes * 60000);
        }
        _date = new Date(unixEpoch);
        var onDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'on');
        var offDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'off');
        if(utcDateIsInDST(new Date(_timeStamp), _timezoneOffsetInMinutes, onDSTRule, offDSTRule, timezones[_timezoneName]['isSouthernHemisphere']))
            _timeStamp -= onDSTRule['offset']*60000;
    };

    if(arguments[1] === undefined || arguments[1] === null)
        _timezoneName = "Etc/UTC";
    else
        _timezoneName = arguments[1];

    _timezoneOffsetInMinutes = timezones[_timezoneName]['offset'];

    if(arguments.length === 0 || arguments[0] === undefined || arguments[0] === null)
        createFromUnixEpoch((new Date()).getTime());

    if(typeof arguments[0] === 'number')
        createFromUnixEpoch(arguments[0]);

    if(typeof arguments[0] === 'string'){
        if(arguments[0].indexOf("GMT") === -1)
            arguments[0] += " GMT";
        createFromUnixEpochForDateTimeValues(Date.parse(arguments[0].substring(0, arguments[0].indexOf("GMT")+3)));
    }

    if(Array.isArray(arguments[0])){
        var input = [];
        for(var i=0; i < 7; i++)
            input[i] = (arguments[0][i] == null) ? (i === 2 ? 1 : 0) : arguments[0][i];
        createFromUnixEpochForDateTimeValues(Date.UTC(input[0], input[1], input[2], input[3], input[4], input[5], input[6]));
    }

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
            return _timezoneName;
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

