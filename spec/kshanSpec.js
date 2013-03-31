describe("kshan test suit", function(){
    var expectDateMonthYearAndDayToBeEqual = function(date, kshan) {
        expect(date.getUTCDate()).toEqual(kshan.date());
        expect(date.getUTCMonth()).toEqual(kshan.month());
        expect(date.getUTCFullYear()).toEqual(kshan.year());
        expect(date.getUTCDay()).toEqual(kshan.day());
    };

    var expectHoursMinutesSecondsAndMillisecondsToBeEqual = function(expectedDate, utcKshan) {
        expect(expectedDate.getUTCHours()).toEqual(utcKshan.hours());
        expect(expectedDate.getUTCMinutes()).toEqual(utcKshan.minutes());
        expect(expectedDate.getUTCSeconds()).toEqual(utcKshan.seconds());
        expect(expectedDate.getUTCMilliseconds()).toEqual(utcKshan.milliseconds());
    };

    it("should contruct utc kshan for today", function(){
        var utcKshan = Kshan();
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
    });

    it("should construct utc kshan for provided unix timestamp", function(){
        var utcKshan = Kshan(1361618782000);
        var expectedDate = new Date(1361618782000);
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
        expectHoursMinutesSecondsAndMillisecondsToBeEqual(expectedDate, utcKshan);
    });

    it("should construct utc kshan for today when provided unix timestamp is undefined", function(){
        var utcKshan = Kshan(undefined);
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
    });

    it("should construct utc kshan for today when provided unix timestamp is null", function(){
        var utcKshan = Kshan(null);
        var expectedDate = new Date();
        expectDateMonthYearAndDayToBeEqual(expectedDate, utcKshan);
    });
});