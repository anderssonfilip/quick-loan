describe('Get Interest and Total to repay', function () {
    it('takes "borrowing", "duration" and expects "interest", "total to repay"', function () {

      var result = getInterestAndRepay(100, 1);
      expect(result[0]).toEqual('0.80');
      expect(result[1]).toEqual('100.80');

      var result = getInterestAndRepay(1, 365);
      expect(result[0]).toEqual('2.92');
      expect(result[1]).toEqual('3.92');

      var result = getInterestAndRepay('1', '365');
      expect(result[0]).toEqual('2.92');
      expect(result[1]).toEqual('3.92');
    });
});
