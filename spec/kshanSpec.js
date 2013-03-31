describe("kshan test suit", function(){
    it("should contruct utc kshan for today", function(){
        var utcKshan = Kshan();
        var expectedDate = new Date();
        expect(expectedDate.getUTCDate()).toEqual(utcKshan.date());
        expect(expectedDate.getUTCMonth()).toEqual(utcKshan.month());
        expect(expectedDate.getUTCFullYear()).toEqual(utcKshan.year());
    });

    it("should construct utc kshan for provided unix timestamp", function(){
        var utcKshan = Kshan(1361618782000);
        var expectedDate = new Date(1361618782000);
        expect(expectedDate.getUTCDate()).toEqual(utcKshan.date());
        expect(expectedDate.getUTCMonth()).toEqual(utcKshan.month());
        expect(expectedDate.getUTCFullYear()).toEqual(utcKshan.year());
    });

    it("should construct utc kshan for today when provided unix timestamp is undefined", function(){
        var utcKshan = Kshan(undefined);
        var expectedDate = new Date();
        expect(expectedDate.getUTCDate()).toEqual(utcKshan.date());
        expect(expectedDate.getUTCMonth()).toEqual(utcKshan.month());
        expect(expectedDate.getUTCFullYear()).toEqual(utcKshan.year());
    });

    it("should construct utc kshan for today when provided unix timestamp is null", function(){
        var utcKshan = Kshan(null);
        var expectedDate = new Date();
        expect(expectedDate.getUTCDate()).toEqual(utcKshan.date());
        expect(expectedDate.getUTCMonth()).toEqual(utcKshan.month());
        expect(expectedDate.getUTCFullYear()).toEqual(utcKshan.year());
    });
});