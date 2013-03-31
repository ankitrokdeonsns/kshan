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
        var utcKshan = Kshan(1361618782000);
        var expectedDate = new Date(1361618782000);
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expectHoursMinutesSecondsAndMillisecondsToBeEqual(expectedDate, utcKshan);
        expect("Etc/UTC").toEqual(utcKshan.timezone());
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
        var kshan = Kshan(1361618782000, "Asia/Kolkata");
        expect(kshan.date()).toEqual(23);
        expect(kshan.month()).toEqual(1);
        expect(kshan.year()).toEqual(2013);
        expect(kshan.hours()).toEqual(16);
        expect(kshan.minutes()).toEqual(56);
        expect(kshan.seconds()).toEqual(22);
        expect(kshan.milliseconds()).toEqual(0);
        expect(kshan.day()).toEqual(6);
        expect(kshan.timezone()).toEqual("Asia/Kolkata");
    });

    it("should set timezone to Etc/UTC when timezone is passed as null", function(){
        var kshan = Kshan(1, null);
        expect(kshan.timezone()).toEqual("Etc/UTC");
    });
});