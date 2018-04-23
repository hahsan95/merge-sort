describe('Split Array function', function() {

  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1, 2], [3, 4]]);
  });

  it('is able to split an unequal array into roughly two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1, 2], [3, 4, 5]]);
  });

  xit('can handle an empty array', function() {
    expect(split([])).toEqual([]);
  });

  xit('can handle an array of length 1', function() {
    expect(split([1])).toEqual([1]);
  });

});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,3],[2,4])).toEqual([1,2,3,4]);
  });

  it('can handle merging two arrays of uneven length', function(){
    expect(merge([1,3,5],[2,4])).toEqual([1,2,3,4,5]);
  });

  it('can merge arrays of length one', function(){
    expect(merge([2],[1])).toEqual([1,2]);
  });
});
