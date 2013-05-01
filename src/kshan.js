Kshan = (function(unixEpoch, timezone){

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
            'offset': -480,
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
            'offset': 330
        },
        'Etc/UTC': {
            'offset': 0
        }
    };
    var _date;
    var _timezoneName;
    var _timeStamp;

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
        if(timezoneOffsetInMinutes !== undefined)
            firstDateOfMonth.setMinutes(firstDateOfMonth.getMinutes() - timezoneOffsetInMinutes)
        return firstDateOfMonth;
    };

    var dateIsDST = function(date, timezoneOffsetInMinutes, onDSTRule, offDSTRule){
        if(onDSTRule === undefined)
            return false;
        if(offDSTRule === undefined)
            return false;

        return (date >= nthDayOfMonth(onDSTRule['which'],
            onDSTRule['day'],
            onDSTRule['month'],
            date.getFullYear(),
            onDSTRule['hours'],
            timezoneOffsetInMinutes)) &&
            (date < nthDayOfMonth(offDSTRule['which'],
                offDSTRule['day'],
                offDSTRule['month'],
                date.getFullYear(),
                offDSTRule['hours'],
                timezoneOffsetInMinutes + onDSTRule['offset']))
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

    var create = function(unixEpoch, timezone){
        var typeofUnixEpoch = typeof unixEpoch;
        if(timezone === undefined || timezone === null) {
            timezone = "Etc/UTC";
        }
        _timezoneName = timezone;

        var timezoneOffsetInMinutes = timezones[_timezoneName]['offset'];

        if(typeof unixEpoch == "number"){
            _timeStamp = unixEpoch;
            if (_timezoneName !== "Etc/UTC") {
            unixEpoch += (timezoneOffsetInMinutes * 60000);
            }
        }

        if(typeof unixEpoch === "string"){
            if(unixEpoch.indexOf("GMT") === -1)
                unixEpoch += " GMT";
            unixEpoch = unixEpoch.substring(0, unixEpoch.indexOf("GMT")+3);
            unixEpoch = (new Date(unixEpoch)).getTime();

            _timeStamp = unixEpoch;
            if (_timezoneName !== "Etc/UTC") {
                _timeStamp -= (timezoneOffsetInMinutes * 60000);
            }
        }

        _date = new Date(unixEpoch);
        var onDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'on');
        var offDSTRule = getDSTRule(_timezoneName, _date.getUTCFullYear(), 'off');

        if(dateIsDST(_date, timezoneOffsetInMinutes, onDSTRule, offDSTRule)){
            if(typeofUnixEpoch === 'number')
                _date.setMinutes(_date.getMinutes() + onDSTRule['offset']);
            else
                _timeStamp -= onDSTRule['offset']*60000;
        }

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

