describe("kshan test suit", function(){
    var expectDateMonthYearAndDayToBeEqual = function(date, kshan) {
        expect(date.getUTCDate()).toEqual(kshan.date());
        expect(date.getUTCMonth()).toEqual(kshan.month());
        expect(date.getUTCFullYear()).toEqual(kshan.year());
        expect(date.getUTCDay()).toEqual(kshan.day());
    };

    var expectHoursMinutesSecondsAndMillisecondsToBeEqual = function(date, kshan) {
        expect(date.getUTCHours()).toEqual(kshan.hours());
        expect(date.getUTCMinutes()).toEqual(kshan.minutes());
        expect(date.getUTCSeconds()).toEqual(kshan.seconds());
        expect(date.getUTCMilliseconds()).toEqual(kshan.milliseconds());
    };

    var expectDateTimeValuesForKshanToBeEqual = function(kshan, date, month, year, hours, minutes, seconds, milliseconds, day, timeStamp, timezone){
        expect(kshan.date()).toEqual(date);
        expect(kshan.month()).toEqual(month);
        expect(kshan.year()).toEqual(year);
        expect(kshan.hours()).toEqual(hours);
        expect(kshan.minutes()).toEqual(minutes);
        expect(kshan.seconds()).toEqual(seconds);
        expect(kshan.milliseconds()).toEqual(milliseconds);
        expect(kshan.day()).toEqual(day);
        expect(kshan.timeStamp()).toEqual(timeStamp);
        expect(kshan.timezone()).toEqual(timezone);
    };

    it("should contruct utc kshan for today", function(){
        var utcKshan = Kshan();
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expect("Etc/UTC").toEqual(utcKshan.timezone());
    });

    it("should construct utc kshan for provided unix timestamp", function(){
        var utcKshan = Kshan(0);
        var expectedDate = new Date(0);
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expectHoursMinutesSecondsAndMillisecondsToBeEqual(expectedDate, utcKshan);
        expect("Etc/UTC").toEqual(utcKshan.timezone());
        expect(0).toEqual(utcKshan.timeStamp());
    });

    it("should construct utc kshan for today when provided unix timestamp is undefined", function(){
        var utcKshan = Kshan(undefined);
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expect("Etc/UTC").toEqual(utcKshan.timezone());
    });

    it("should construct utc kshan for today when provided unix timestamp is null", function(){
        var utcKshan = Kshan(null);
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expect("Etc/UTC").toEqual(utcKshan.timezone());
    });

    it("should construct kshan from unix epoch and timezone for india timezone (not observing DST)", function(){
        var kshan = Kshan(0, "Asia/Kolkata");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 5, 30, 0, 0, 4, 0, 'Asia/Kolkata');
    });

    it("should set timezone to Etc/UTC when timezone is passed as null", function(){
        var kshan = Kshan(1, null);
        expect(kshan.timezone()).toEqual("Etc/UTC");
    });

    it("comparison of kshans", function(){
        var smallerKshan = Kshan(1361618782000);
        var largerKshan = Kshan(1361695749000);
        expect(smallerKshan.compare(largerKshan)).toEqual(-1);
        expect(largerKshan.compare(smallerKshan)).toEqual(1);
        expect(largerKshan.compare(largerKshan)).toEqual(0);
    });

    it("should construct utc kshan for datetime string", function(){
        var kshan = Kshan("Jan 1, 1970");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 0, 0, 4, 0, 'Etc/UTC');
    });

    it("should construct utc kshan for datetime string with 'GMT' already present in it", function(){
        var kshan = Kshan("Jan 1, 1970 GMT");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 0, 0, 4, 0, 'Etc/UTC');
    });

    it("should construct utc kshan for datetime string with 'GMT' already present and ignoring timezone offset in it", function(){
        var kshan = Kshan("Jan 1, 1970 GMT+0530");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 0, 0, 4, 0, 'Etc/UTC');
    });

    it("should construct utc kshan for datetime string for timezone (not observing DST)", function(){
        var kshan = Kshan("Jan 1, 1970", "Asia/Kolkata");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 0, 0, 4, -19800000, "Asia/Kolkata");
    });

    it('should return kshan for datetime string for timezone (observing DST and is in DST)', function(){
        var kshan = Kshan('Apr 1, 2013', 'America/Los_Angeles');
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 3, 2013, 0, 0, 0, 0, 1, 1364799600000, "America/Los_Angeles");
    });

    it('should return kshan for datetime string for timezone (observing DST and is not in DST)', function(){
        var kshan = Kshan('Mar 1, 2013', 'America/Los_Angeles');
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 2, 2013, 0, 0, 0, 0, 5, 1362124800000, "America/Los_Angeles");
    });

    it('should return kshan for given unixEpoch and timezone (observing DST and is in DST)', function(){
        var kshan = Kshan(1364799600000, "America/Los_Angeles");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 3, 2013, 0, 0, 0, 0, 1, 1364799600000, "America/Los_Angeles");
    });

    it('should return kshan for given unixEpoch and timezone (observing DST and is not in DST)', function(){
        var kshan = Kshan(1362124800000, "America/Los_Angeles");
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 2, 2013, 0, 0, 0, 0, 5, 1362124800000, "America/Los_Angeles");
    });

    it('should return kshan for given datestring and timezone in southern hemisphere in later half of year(observing DST and is in DST)', function(){
        var kshan = Kshan('Dec 31, 2012', 'Australia/Sydney');
        expectDateTimeValuesForKshanToBeEqual(kshan, 31, 11, 2012, 0, 0, 0, 0, 1, 1356872400000, "Australia/Sydney");
    });

    it('should return kshan for given datestring and timezone in southern hemisphere (observing DST and is not in DST)', function(){
        var kshan = Kshan('May 1, 2013', 'Australia/Sydney');
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 4, 2013, 0, 0, 0, 0, 3, 1367330400000, "Australia/Sydney");
    });

    it('should return kshan for given datestring and timezone in southern hemisphere in first half of year (observing DST and is in DST)', function(){
        var kshan = Kshan('Jan 31, 2013', 'Australia/Sydney');
        expectDateTimeValuesForKshanToBeEqual(kshan, 31, 0, 2013, 0, 0, 0, 0, 4, 1359550800000, 'Australia/Sydney');
    });

    it('should construct utc kshan for given datetime array', function(){
        var kshan = Kshan([2013, 0, 1, 0, 0, 0, 0]);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 2013, 0, 0, 0, 0, 2, 1356998400000, 'Etc/UTC');
    });

});