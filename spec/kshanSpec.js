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
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(0);
        expect(kshan.year()).toEqual(1970);
        expect(kshan.hours()).toEqual(5);
        expect(kshan.minutes()).toEqual(30);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(4);
        expect(kshan.timeStamp()).toEqual(0);
        expect(kshan.timezone()).toEqual("Asia/Kolkata");
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
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(0);
        expect(kshan.year()).toEqual(1970);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(4);
        expect(kshan.timeStamp()).toEqual(0);
        expect(kshan.timezone()).toEqual("Etc/UTC");
    });

    it("should construct utc kshan for datetime string with 'GMT' already present in it", function(){
        var kshan = Kshan("Jan 1, 1970 GMT");
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(0);
        expect(kshan.year()).toEqual(1970);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(4);
        expect(kshan.timeStamp()).toEqual(0);
        expect(kshan.timezone()).toEqual("Etc/UTC");
    });

    it("should construct utc kshan for datetime string with 'GMT' already present and ignoring timezone offset in it", function(){
        var kshan = Kshan("Jan 1, 1970 GMT+0530");
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(0);
        expect(kshan.year()).toEqual(1970);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(4);
        expect(kshan.timeStamp()).toEqual(0);
        expect(kshan.timezone()).toEqual("Etc/UTC");
    });

    it("should construct utc kshan for datetime string for timezone (not observing DST)", function(){
        var kshan = Kshan("Jan 1, 1970", "Asia/Kolkata");
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(0);
        expect(kshan.year()).toEqual(1970);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(4);
        expect(kshan.timeStamp()).toEqual(-19800000);
        expect(kshan.timezone()).toEqual("Asia/Kolkata");
    });

    it('should return kshan for datetime string for timezone (observing DST and is in DST)', function(){
        var kshan = Kshan('Apr 1, 2013', 'America/Los_Angeles');
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(3);
        expect(kshan.year()).toEqual(2013);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(1);
        expect(kshan.timeStamp()).toEqual(1364799600000);
        expect(kshan.timezone()).toEqual("America/Los_Angeles");
    });

    it('should return kshan for datetime string for timezone (observing DST and is not in DST)', function(){
        var kshan = Kshan('Mar 1, 2013', 'America/Los_Angeles');
        expect(kshan.date()).toEqual(1);
        expect(kshan.month()).toEqual(2);
        expect(kshan.year()).toEqual(2013);
        expect(kshan.hours()).toEqual(0);
        expect(kshan.minutes()).toEqual(0);
        expect(kshan.seconds()).toEqual(0);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(5);
        expect(kshan.timeStamp()).toEqual(1362124800000);
        expect(kshan.timezone()).toEqual("America/Los_Angeles");
    });

});