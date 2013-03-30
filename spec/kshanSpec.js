describe("kshan test suit", function(){
    it("should contruct utc kshan for today", function(){
        var kshan = Kshan();
        var date = new Date();
        expect(date.getUTCDate()).toEqual(kshan.date());
        expect(date.getUTCMonth()).toEqual(kshan.month());
        expect(date.getUTCFullYear()).toEqual(kshan.year());
    });
});