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

    it('timezone should default to Etc/UTC if timezone name is not found in list of timezones', function(){
        var kshan = Kshan(0, 'random timezone');
        expect('Etc/UTC').toEqual(kshan.timezone());
    });

    it('timezone should default to Etc/UTC if timezone name is not a string', function(){
        var pretendingToBeTimezoneName = 0;
        var kshan = Kshan(0, pretendingToBeTimezoneName);
        expect('Etc/UTC').toEqual(kshan.timezone());
    });

    it('should return difference between two kshans in milliseconds', function(){
        var kshan1 = Kshan(0);
        var kshan2 = Kshan(2);
        expect(2).toEqual(kshan1.diff(kshan2));
        expect(2).toEqual(kshan2.diff(kshan1));
    });

    it('should set date for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.date(2);
        expectDateTimeValuesForKshanToBeEqual(kshan, 2, 0, 1970, 0, 0, 0, 0, 5, 86400000, 'Etc/UTC');
    });

	it('should set month for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.month(1);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 1, 1970, 0, 0, 0, 0, 0, 2678400000, 'Etc/UTC');
    });

	it('should set year for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.year(1971);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1971, 0, 0, 0, 0, 5, 31536000000, 'Etc/UTC');
    });

	it('should set hours for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.hours(1);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 1, 0, 0, 0, 4, 3600000, 'Etc/UTC');
    });

	it('should set minutes for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.minutes(1);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 1, 0, 0, 4, 60000, 'Etc/UTC');
    });

	it('should set seconds for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.seconds(1);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 1, 0, 4, 1000, 'Etc/UTC');
    });

	it('should set milliseconds for kshan', function(){
        var kshan = Kshan('Jan 1, 1970');
        kshan.milliseconds(1);
        expectDateTimeValuesForKshanToBeEqual(kshan, 1, 0, 1970, 0, 0, 0, 1, 4, 1, 'Etc/UTC');
    });
});
